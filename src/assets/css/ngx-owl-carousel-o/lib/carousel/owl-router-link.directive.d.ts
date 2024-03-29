import { LocationStrategy } from '@angular/common';
import { ElementRef, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare type QueryParamsHandling = 'merge' | 'preserve' | '';
export declare class OwlRouterLinkDirective {
    private router;
    private route;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    stopLink: boolean;
    private commands;
    private preserve;
    constructor(router: Router, route: ActivatedRoute, tabIndex: string, renderer: Renderer2, el: ElementRef);
    set owlRouterLink(commands: any[] | string);
    /**
     * @deprecated 4.0.0 use `queryParamsHandling` instead.
     */
    set preserveQueryParams(value: boolean);
    onClick(): boolean;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OwlRouterLinkDirective, [null, null, { attribute: "tabindex"; }, null, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OwlRouterLinkDirective, ":not(a)[owlRouterLink]", never, { "stopLink": "stopLink"; "owlRouterLink": "owlRouterLink"; "preserveQueryParams": "preserveQueryParams"; "queryParams": "queryParams"; "fragment": "fragment"; "queryParamsHandling": "queryParamsHandling"; "preserveFragment": "preserveFragment"; "skipLocationChange": "skipLocationChange"; "replaceUrl": "replaceUrl"; }, {}, never>;
}
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
export declare class OwlRouterLinkWithHrefDirective implements OnChanges, OnDestroy {
    private router;
    private route;
    private locationStrategy;
    target: string;
    queryParams: {
        [k: string]: any;
    };
    fragment: string;
    queryParamsHandling: QueryParamsHandling;
    preserveFragment: boolean;
    skipLocationChange: boolean;
    replaceUrl: boolean;
    stopLink: boolean;
    private commands;
    private subscription;
    private preserve;
    href: string;
    constructor(router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy);
    set owlRouterLink(commands: any[] | string);
    set preserveQueryParams(value: boolean);
    ngOnChanges(changes: {}): any;
    ngOnDestroy(): any;
    onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean;
    private updateTargetUrlAndHref;
    get urlTree(): UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OwlRouterLinkWithHrefDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<OwlRouterLinkWithHrefDirective, "a[owlRouterLink]", never, { "stopLink": "stopLink"; "owlRouterLink": "owlRouterLink"; "preserveQueryParams": "preserveQueryParams"; "target": "target"; "queryParams": "queryParams"; "fragment": "fragment"; "queryParamsHandling": "queryParamsHandling"; "preserveFragment": "preserveFragment"; "skipLocationChange": "skipLocationChange"; "replaceUrl": "replaceUrl"; }, {}, never>;
}

//# sourceMappingURL=owl-router-link.directive.d.ts.map