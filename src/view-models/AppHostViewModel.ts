import { App } from "web-atoms-core/bin/App";
import { Inject } from "web-atoms-core/bin/di/Inject";
import { AtomViewModel } from "web-atoms-core/bin/view-model/AtomViewModel";
import { ModuleFiles } from "../ModuleFiles";
import MenuService from "../services/MenuService";

export class AppHostViewModel extends AtomViewModel {

    constructor(
        @Inject app: App,
        @Inject public readonly menuService: MenuService
    ) {
        super(app);
    }

    public async init(): Promise<any> {
        const ms = this.menuService;
        ms.addLink("View Pager", "tab://app/" + ModuleFiles.views.samples.viewPager.ViewPager);
    }
}
