import { OrxeTabItem } from '../';
import '@testing-library/jest-dom';
import tabItemCss from '../tab-item-css';

describe('orxe-tab-item', () => {
  it('should be register', () => {
    expect(true).toBeDefined();
  });

  let TabItem;

  beforeEach(async () => {
    OrxeTabItem;
    document.body.appendChild(document.createElement('orxe-tab-item'));
    TabItem = document.querySelector('orxe-tab-item') as OrxeTabItem;
    
  });

  afterEach(async function() {
    await TabItem.remove();
  });

  /**
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (TabItem.hasOwnProperty(property)) {
        TabItem[property] = properties[property];
      }
    }
    await TabItem.requestUpdate();
  }

  it('should check default value for properties for active', () => {
    expect(TabItem.active).toEqual(true);
    expect(TabItem.disabled).toBeFalsy;
    expect(TabItem.isChip).toBeFalsy;
    expect(TabItem.icon).toEqual('');
  });

  it('should be defined', async () => {    
    expect(TabItem).toBeDefined();
  });

  it('Should set active property', async () => {
    await setProperties({ active: true });
    expect(TabItem).toHaveAttribute('active', 'true');
  });

  it('Should active when clicked on it', async () => {    
    await setProperties({ active: false });
    const container = TabItem.shadowRoot.querySelector(`div[class='tab-item']`);
    await container.click();
    expect(TabItem).toHaveAttribute('active', 'true');
  });

  it('should active default first tab', async() => {      
    TabItem._linkPanels();
    expect(TabItem).toHaveAttribute('active', 'true');
  });

  it('Should get all tabs ', async () => {    
    expect(TabItem._allTabs()).toBeTruthy();
    expect(typeof TabItem._allTabs()).toBe("object");
  });

  it('Should get reset active property on all tabs ', async () => {  
    TabItem.reset(); 
    expect(TabItem.reset()).toBeUndefined();
  });

  it('Should get attribute on lifecycle update ', async () => {  
    TabItem.firstUpdated(); 
    expect(TabItem).toHaveAttribute('tabIndex','0');
  }); 

});
