"""Retest Solution section hover after full reveal settle."""
import asyncio, json
from playwright.async_api import async_playwright

URL = "https://carbon-markets-web.preview.emergentagent.com"

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await (await browser.new_context(viewport={"width":1440,"height":900})).new_page()
        await page.goto(URL, wait_until="networkidle")
        await page.wait_for_timeout(1500)

        # Scroll to solution and wait long enough for reveal transitions to fully settle
        card = await page.query_selector('#solution .nr-flip')
        await card.scroll_into_view_if_needed()
        await page.wait_for_timeout(2000)  # reveal 700ms + buffer

        detail = await card.query_selector('.nr-flip-detail')
        detail_js = "(el) => ({op: getComputedStyle(el).opacity, mh: getComputedStyle(el).maxHeight, h: el.getBoundingClientRect().height})"
        transform_js = "(el) => getComputedStyle(el).transform"

        before = await page.evaluate(detail_js, detail)
        tb = await page.evaluate(transform_js, card)

        # Try 2 methods: playwright hover + native mouseenter/mouseover dispatch
        await card.hover()
        await page.wait_for_timeout(900)
        after_hover = await page.evaluate(detail_js, detail)
        ta_hover = await page.evaluate(transform_js, card)

        # Force :hover via CDP is not straightforward; try focus (also triggers)
        await page.mouse.move(0, 0)
        await page.wait_for_timeout(400)
        await card.focus()
        await page.wait_for_timeout(900)
        after_focus = await page.evaluate(detail_js, detail)
        ta_focus = await page.evaluate(transform_js, card)

        # Also test 2nd card
        cards = await page.query_selector_all('#solution .nr-flip')
        results_all = []
        for i, c in enumerate(cards):
            await page.mouse.move(0,0)
            await page.wait_for_timeout(300)
            d = await c.query_selector('.nr-flip-detail')
            b = await page.evaluate(detail_js, d)
            await c.hover()
            await page.wait_for_timeout(800)
            a = await page.evaluate(detail_js, d)
            results_all.append({"i":i,"before":b,"after":a})

        print(json.dumps({
            "settled_before": before,
            "settled_transform_before": tb,
            "after_hover": after_hover,
            "transform_after_hover": ta_hover,
            "after_focus": after_focus,
            "transform_after_focus": ta_focus,
            "all_solution_cards": results_all
        }, indent=2, default=str))

        await browser.close()

asyncio.run(run())
