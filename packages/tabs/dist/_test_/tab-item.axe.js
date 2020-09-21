import { OrxeTabItem } from '../';
import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);
describe('orxe-tab-item-axe', () => {
    it('', () => {
        expect(true).toBeTruthy();
    });
    let TabItem;
    beforeEach(async () => {
        OrxeTabItem;
        document.body.appendChild(document.createElement('Tab-item'));
        TabItem = document.querySelector('Tab-item');
    });
    afterEach(() => {
        TabItem.remove();
    });
    it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
        const result = await axe(TabItem);
        expect(result).toHaveNoViolations();
    });
});
