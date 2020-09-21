import { LitElement } from 'lit-element';
export default class OrxeTabItem extends LitElement {
    active: boolean;
    disabled: boolean;
    icon: string;
    isChip: boolean;
    firstUpdated(): void;
    render(): import("lit-element").TemplateResult;
    renderTitle(): import("lit-element").TemplateResult;
    _linkPanels(): void;
    _allTabs(): Element[] | undefined;
    reset(): void;
    _selectTab(newTab: any): void;
    _onClick(event: any): void;
    static styles: import("lit-element").CSSResult;
}
