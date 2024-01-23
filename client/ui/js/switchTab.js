SWITCHTAB_JS = {}   // Namespace

/**
 * SWITCHTAB_JS.switchTab (GLOBAL.method.switchTab)
 * 
 * Switches to the specified tab by hiding all other tabs and showing the selected tab.
 * 
 * @param {string} tabname - The ID of the tab to switch to.
 */
SWITCHTAB_JS.switchTab = function (tabname) {
    // highlight tab in nav bar
    $('#nav>.nav-item.selected').classList.remove('selected');
    $(`#nav-${tabname}.nav-item`).classList.add('selected');

    // Switch to the selected tab
    $('div.page.selected').classList.remove('selected');
    $(`#page-${tabname}.page`).classList.add('selected');
}