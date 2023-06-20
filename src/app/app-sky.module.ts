import {
  NgModule
} from '@angular/core';

import {
  SkyClipboardModule
} from '@blackbaud/skyux-lib-clipboard';

import {
  SkyCodeModule,
  SkyCodeBlockModule
} from '@blackbaud/skyux-lib-code-block';

import {
  SkyHeroModule,
  SkyImageModule,
  SkyVideoModule
} from '@blackbaud/skyux-lib-media';

import {
  SkyRestrictedViewModule
} from '@blackbaud/skyux-lib-restricted-view';

import {
  SkyNumericModule,
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyTimepickerModule,
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyCheckboxModule,
  SkyFileAttachmentsModule,
  SkyRadioModule,
  SkyToggleSwitchModule
} from '@skyux/forms';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyAuthHttpClientModule
} from '@skyux/http';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyIconModule,
  SkyWaitModule,
  SkyTokensModule,
  SkyTextHighlightModule,
  SkyLabelModule,
  SkyHelpInlineModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule,
  SkyCardModule,
  SkyToolbarModule,
  SkyDefinitionListModule,
  SkyTextExpandModule,
  SkyTextExpandRepeaterModule,
  SkyPageSummaryModule,
  SkyActionButtonModule
} from '@skyux/layout';

import {
  SkyRepeaterModule,
  SkySortModule,
  SkyPagingModule,
  SkyFilterModule,
  SkyInfiniteScrollModule
} from '@skyux/lists';

import {
  SkySearchModule,
  SkyLookupModule,
  SkyAutocompleteModule
} from '@skyux/lookup';

import {
  SkyModalModule,
  SkyConfirmModule
} from '@skyux/modals';

import {
  SkyDropdownModule,
  SkyPopoverModule
} from '@skyux/popovers';

import {
  SkyTabsModule,
  SkyVerticalTabsetModule,
  SkySectionedFormModule
} from '@skyux/tabs';

@NgModule({
  exports: [
    SkyActionButtonModule,
    SkyAlertModule,
    SkyAuthHttpClientModule,
    SkyAutocompleteModule,
    SkyCardModule,
    SkyCheckboxModule,
    SkyClipboardModule,
    SkyCodeBlockModule,
    SkyCodeModule,
    SkyConfirmModule,
    SkyDatepickerModule,
    SkyDefinitionListModule,
    SkyDropdownModule,
    SkyFileAttachmentsModule,
    SkyFilterModule,
    SkyFluidGridModule,
    SkyGridModule,
    SkyHelpInlineModule,
    SkyHeroModule,
    SkyI18nModule,
    SkyIconModule,
    SkyImageModule,
    SkyInfiniteScrollModule,
    SkyKeyInfoModule,
    SkyLabelModule,
    SkyLookupModule,
    SkyMediaQueryModule,
    SkyModalModule,
    SkyNumericModule,
    SkyPageSummaryModule,
    SkyPagingModule,
    SkyPopoverModule,
    SkyRadioModule,
    SkyRepeaterModule,
    SkyRestrictedViewModule,
    SkySearchModule,
    SkySectionedFormModule,
    SkySortModule,
    SkyTabsModule,
    SkyTextExpandModule,
    SkyTextExpandRepeaterModule,
    SkyTextHighlightModule,
    SkyTimepickerModule,
    SkyToggleSwitchModule,
    SkyTokensModule,
    SkyToolbarModule,
    SkyVerticalTabsetModule,
    SkyVideoModule,
    SkyWaitModule
  ]
})
export class AppSkyModule { }
