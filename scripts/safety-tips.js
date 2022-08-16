/*
 * Contains functions and variables responsible for the safety tips functionality
 */

import { data } from "/scripts/shared.js";

//Load and render the general safety tips
export function SetupSafetyTips() {

    //Reference to the general safety tips section of the document
    const safetyTipsSection = document.getElementById('safety-tips-section');

    //Setup the shoelace tab group
    let slTabGroup = document.createElement('sl-tab-group');
    slTabGroup.placement = "top";
    slTabGroup.id = "safety-tips-tab-group";

    //Create and append a tab and tab panel for each safety tip
    for (let tip of data.generalSafetyTips) {
        slTabGroup.appendChild(CreateTabButton(tip.title));
        slTabGroup.appendChild(CreateTabPanel(tip));
    }

    //Append the tab group element
    safetyTipsSection.appendChild(slTabGroup);

}

//Creates a shoelace tab button
function CreateTabButton(title) {
    let slTab = document.createElement('sl-tab');
    let span = document.createElement('span');
    slTab.classList.add("safety-tips-tab");
    slTab.slot = "nav";
    slTab.panel = title;
    span.innerHTML = title;
    slTab.appendChild(span);

    return slTab;
}

//Creates a shoelace tab panel
function CreateTabPanel(tip) {
    //Setup the tab panel
    let slTabPanel = document.createElement('sl-tab-panel');
    slTabPanel.classList.add("safety-tips-tab-panel");
    slTabPanel.name = tip.title;

    //Setup the tab panel heading
    let header = document.createElement('h3');
    header.innerHTML = tip.title;
    slTabPanel.appendChild(header);

    //Add the tip paragraphs to the tab panel
    for (let para of tip.paragraphs) {
        let p = document.createElement('p');
        p.innerHTML = para;
        slTabPanel.appendChild(p);
    }

    return slTabPanel;
}