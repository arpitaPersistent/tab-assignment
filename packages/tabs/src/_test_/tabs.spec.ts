import { OrxeTabs } from '../';


describe('orxe-tabs', () => {
  it('should be register', () => {
    expect(true).toBeDefined();
  });

  let Tabs;

  beforeEach(async () => {
    OrxeTabs;
    document.body.appendChild(document.createElement('orxe-tabs'));
    Tabs = document.querySelector('orxe-tabs') as OrxeTabs;
  });

  afterEach(async function() {
    await Tabs.remove();
  });

  /**
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (Tabs.hasOwnProperty(property)) {
        Tabs[property] = properties[property];
      }
    }
    await Tabs.requestUpdate();
  }

  it('should be defined', async () => {    
    expect(Tabs).toBeDefined();
  });

  it('should check default value for properties for Tabs', () => {
    expect(Tabs.name).toEqual('orxe-tabs');
    expect(Tabs.orientation).toEqual('horizontal');
  });
});

