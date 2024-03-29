import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarouselService } from './carousel.service';
import * as ɵngcc0 from '@angular/core';
export declare class AutoHeightService implements OnDestroy {
    private carouselService;
    /**
     * Subscrioption to merge Observable  from CarouselService
     */
    autoHeightSubscription: Subscription;
    constructor(carouselService: CarouselService);
    ngOnDestroy(): void;
    /**
     * Defines Observables which service must observe
     */
    spyDataStreams(): void;
    /**
     * Updates the prop 'heightState' of slides
     */
    update(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AutoHeightService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AutoHeightService>;
}

//# sourceMappingURL=autoheight.service.d.ts.map