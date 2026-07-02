"""NuRegen backend API tests."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://carbon-markets-web.preview.emergentagent.com').rstrip('/')
# Fallback to frontend .env if env not set
if not BASE_URL:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


def test_root(s):
    r = s.get(f"{API}/")
    assert r.status_code == 200
    assert r.json() == {"message": "NuRegen API"}


def test_contact_valid(s):
    payload = {"name": "TEST_Alice", "email": "test_alice@example.com", "message": "Hello NuRegen"}
    r = s.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == "TEST_Alice"
    assert data["email"] == "test_alice@example.com"
    assert data["message"] == "Hello NuRegen"
    assert data["forward_to"] == "info@nuregen.earth"
    assert "id" in data


def test_contact_with_company(s):
    payload = {"name": "TEST_Bob", "email": "test_bob@example.com",
               "message": "Partnership inquiry", "company": "TEST_Acme"}
    r = s.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["company"] == "TEST_Acme"
    # Verify persistence via GET
    r2 = s.get(f"{API}/contact")
    assert r2.status_code == 200
    ids = [x["id"] for x in r2.json()]
    assert data["id"] in ids


def test_contact_invalid_email(s):
    r = s.post(f"{API}/contact", json={"name": "TEST_X", "email": "not-an-email", "message": "hi"})
    assert 400 <= r.status_code < 500


def test_contact_empty_name(s):
    r = s.post(f"{API}/contact", json={"name": "", "email": "a@b.com", "message": "hi"})
    assert 400 <= r.status_code < 500


def test_contact_empty_message(s):
    r = s.post(f"{API}/contact", json={"name": "TEST_Y", "email": "a@b.com", "message": ""})
    assert 400 <= r.status_code < 500


def test_contact_list_sorted(s):
    r = s.get(f"{API}/contact")
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list)
    assert len(rows) >= 1
    # Newest first: created_at descending
    if len(rows) >= 2:
        assert rows[0]["created_at"] >= rows[1]["created_at"]


def test_status_endpoints(s):
    r = s.post(f"{API}/status", json={"client_name": "TEST_client"})
    assert r.status_code == 200, r.text
    assert r.json()["client_name"] == "TEST_client"
    r2 = s.get(f"{API}/status")
    assert r2.status_code == 200
    assert isinstance(r2.json(), list)
