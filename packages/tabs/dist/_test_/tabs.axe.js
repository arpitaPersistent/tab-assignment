import { OrxeTabs } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-tabs-axe', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
    let Tabs;
    beforeEach(async () => {
        OrxeTabs;
        document.body.appendChild(document.createElement('Tabs'));
        Tabs = document.querySelector('Tabs');
    });
    afterEach(() => {
        Tabs.remove();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(Tabs);
        expect(result).toHaveNoViolations();
    });
});
