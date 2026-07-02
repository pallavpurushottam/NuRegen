"""NuRegen UI regression - iteration 2"""
import asyncio
import json
from playwright.async_api import async_playwright

URL = "https://carbon-markets-web.preview.emergentagent.com"


async def run():
    results = {}
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()
        await page.goto(URL, wait_until="networkidle")
        await page.wait_for_timeout(1500)

        # Nav logo
        nav_logo = await page.query_selector('[data-testid="nav-logo"]')
        results["nav_logo_exists"] = nav_logo is not None
        results["nav_logo_text_desktop"] = (await nav_logo.inner_text()).strip() if nav_logo else None

        chip_desktop_js = """
          () => {
            const chip = document.querySelector('.nr-logo-chip');
            const wrap = document.querySelector('.nr-logo-icon-wrap');
            return {
              chip_exists: !!chip,
              chip_bg: chip ? getComputedStyle(chip).backgroundColor : null,
              wrap_bgsize: wrap ? getComputedStyle(wrap).backgroundSize : null,
              wrap_bgpos: wrap ? getComputedStyle(wrap).backgroundPosition : null,
              wrap_w: wrap ? getComputedStyle(wrap).width : null,
              wrap_h: wrap ? getComputedStyle(wrap).height : null,
              wrap_has_bg_img: wrap ? getComputedStyle(wrap).backgroundImage.startsWith('url') : null
            };
          }
        """
        results["chip_desktop"] = await page.evaluate(chip_desktop_js)

        page_text = await page.evaluate("() => document.body.innerText.toLowerCase()")
        results["has_hover_to_expand_text"] = "hover to expand" in page_text

        detail_js = "(el) => ({op: getComputedStyle(el).opacity, mh: getComputedStyle(el).maxHeight, h: el.getBoundingClientRect().height})"
        transform_js = "(el) => getComputedStyle(el).transform"

        for sec_id in ["solution", "tech", "pillars"]:
            selector = "#" + sec_id + " .nr-flip"
            card = await page.query_selector(selector)
            if not card:
                results[sec_id] = "MISSING"
                continue
            await card.scroll_into_view_if_needed()
            await page.wait_for_timeout(300)
            detail = await card.query_selector('.nr-flip-detail')
            arrow = await card.query_selector('.nr-flip-arrow')
            arrow_txt = (await arrow.inner_text()).strip() if arrow else None

            before = await page.evaluate(detail_js, detail) if detail else None
            card_tb = await page.evaluate(transform_js, card)
            await card.hover()
            await page.wait_for_timeout(700)
            after = await page.evaluate(detail_js, detail) if detail else None
            card_ta = await page.evaluate(transform_js, card)
            results[sec_id] = {
                "arrow": arrow_txt,
                "detail_before": before,
                "detail_after": after,
                "card_transform_before": card_tb,
                "card_transform_after": card_ta,
            }
            await page.mouse.move(0, 0)
            await page.wait_for_timeout(200)

        results["flips_count"] = await page.evaluate("() => document.querySelectorAll('.nr-flip').length")
        results["arrows_count"] = await page.evaluate("() => document.querySelectorAll('.nr-flip .nr-flip-arrow').length")

        marquee_el = await page.query_selector('.marquee-track')
        if not marquee_el:
            marquee_el = await page.query_selector('[class*="marquee"] > *')
        if marquee_el:
            t1 = await page.evaluate(transform_js, marquee_el)
            await page.wait_for_timeout(2000)
            t2 = await page.evaluate(transform_js, marquee_el)
            results["marquee"] = {"found": True, "changed": t1 != t2, "t1": t1[:60], "t2": t2[:60]}
        else:
            results["marquee"] = {"found": False}

        clock_el = await page.query_selector('[data-testid="carbon-clock-number"]')
        if clock_el:
            v1 = await clock_el.text_content()
            await page.wait_for_timeout(2500)
            v2 = await clock_el.text_content()
            results["carbon_clock"] = {"found": True, "changed": v1 != v2, "v1": v1, "v2": v2}
        else:
            results["carbon_clock"] = {"found": False}

        contact_js = """
          async () => {
            const r = await fetch(window.location.origin + '/api/contact', {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({name:'TEST_User', email:'test@example.com', message:'Regression test'})
            });
            let data = null;
            try { data = await r.json(); } catch(e) {}
            return {status: r.status, data: data};
          }
        """
        results["contact_api"] = await page.evaluate(contact_js)

        # Mobile
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.goto(URL, wait_until="networkidle")
        await page.wait_for_timeout(1500)

        nav_logo_m = await page.query_selector('[data-testid="nav-logo"]')
        results["nav_logo_text_mobile"] = (await nav_logo_m.inner_text()).strip() if nav_logo_m else None

        chip_mobile_js = """
          () => {
            const chip = document.querySelector('.nr-logo-chip');
            const wrap = document.querySelector('.nr-logo-icon-wrap');
            return {
              chip_bg: chip ? getComputedStyle(chip).backgroundColor : null,
              wrap_w: wrap ? getComputedStyle(wrap).width : null,
              wrap_h: wrap ? getComputedStyle(wrap).height : null,
              wrap_bgsize: wrap ? getComputedStyle(wrap).backgroundSize : null,
              wrap_bgpos: wrap ? getComputedStyle(wrap).backgroundPosition : null
            };
          }
        """
        results["chip_mobile"] = await page.evaluate(chip_mobile_js)

        await page.screenshot(path="/tmp/nav_mobile.png", full_page=False, clip={"x": 0, "y": 0, "width": 390, "height": 120})

        await browser.close()
    print("=== RESULTS ===")
    print(json.dumps(results, indent=2, default=str))
    return results


if __name__ == "__main__":
    asyncio.run(run())
