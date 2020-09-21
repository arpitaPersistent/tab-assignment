import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tabs-css';


@customElement('orxe-tabs')
export default class OrxeTabs extends LitElement {
  /**
   *
   * @memberof OrxeTabs
   * This is used to give the id of a tab
   */
  @property({ type: String, reflect: true, attribute: 'name' }) 
  name = 'orxe-tabs';

  /**
   *
   * @memberof OrxeTabs
   * This is used to give orientation for tab
   */
  @property({ type: String, reflect: true, attribute: 'orientation' }) 
  orientation = 'horizontal'; 

  /**
   *  This function is used to set name , orientation and role atrribute for the accessiblity
   */
  setInitialAttributes() {
    this.setAttribute('id', `${this.name}`);
    this.setAttribute('role', 'tablist');
    this.setAttribute('aria-orientation', this.orientation);    
  }

  /**
   * Implement `firstUpdated` for the setting accessibility variables.
   */
  firstUpdated() {
    this.requestUpdate();
    this.setInitialAttributes();
  } 

  /**
   * Implement `render` to define a template for tab element.
   */
  render() {
    return html`
      <div class="tab"><slot></slot></div>
    `;
  }


  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;

}


