import {css} from 'lit-element';
export default css`
:host {
    --tabs-item-indicator-color-active: var(--secondary);
    --tabs-item-indicator-color-inactive: var(--separator-01);
    --tabs-font-color-active: var(--secondary);
    --tabs-touch-target: var(--touch-target-medium);
    --tabs-font-size: 1.4rem;
    --tabs-font-weight-active: var(--font-weight-semi-bold);
    --tabs-item-color-active: var(--tabs-font-color-active);
    --tabs-item-indicator-height: 2px;
    --tabs-height: 40px;
    --tabs-item-padding: 0 var(--spacing-05);
    --tabs-with-icon-label-font-size: 1.4rem;
    --tab-as-chip-font-size: 1.2rem;
    --tab-as-chip-font-color: var(--primary);
    --tab-as-chip-disable-border: 1px solid var(--disabled-text);
  }
:host {
    flex-grow: 1;
    display: flex;
    margin-left: var(--spacing-01);
    height: var(--tabs-height);
    min-height: var(--tabs-touch-target);
    box-sizing: border-box;
    padding: var(--tabs-item-padding);
    align-items: center;
    cursor: pointer;
    justify-content: center;
    white-space: nowrap;
    border-bottom: var(--tabs-item-indicator-height) solid var(--tabs-item-indicator-color-inactive);
  }

:host([active]) {
    border-bottom: var(--tabs-item-indicator-height) solid var(--tabs-item-indicator-color-active);
}

:host .tab-item { 
    display: inline-flex; 
    font-size: var(--tabs-font-size);
}
.tab-item-label {
    font-size: var(--tabs-with-icon-label-font-size);
}
.tab-item-icon{   
    margin-right: var(--spacing-02);
} 

:host([active]) .tab-item {
    color: var(--tabs-item-color-active);
    font-weight: var(--tabs-font-weight-active);
    transition: width 240ms;
    transition-timing-function: linear;
}

:host([active]) span {
    color: var(--tabs-item-indicator-color-active);
}
   
:host([disabled]) .tab-item {
    cursor: not-allowed;
    color: var(--tabs-icon-inactive-color);
    pointer-events: none; 
}
:host([disabled]) .tab-item {
    cursor: not-allowed;
    color: var(--tabs-icon-inactive-color);
    pointer-events: none; 
}

:host([iconSlotRight]) .tab-item {
    flex-direction: row-reverse;
}
:host([iconSlotRight]) .tab-item-icon {
    margin-left: var(--spacing-02);
    margin-right: 0;
}

:host([isChip]) {
    min-height: var(--touch-target-small);
    height: var(--touch-target-small);
    border: var(--tab-as-chip-disable-border);
    border-radius: var(--border-radius);
    margin-left: var(--spacing-03);
    padding: 0 var(--spacing-05);
}
:host([isChip]) .chip-item {
    font-size: var(--tab-as-chip-font-size);
    justify-content: space-between;
    display: flex;
    width: 100%;
  }

:host([active][isChip]) {
    border: 0;
}
:host([active][isChip]) .chip-item {
    color: var(--tab-as-chip-font-color);
    font-weight: var(--tabs-font-weight-active);
}
`;