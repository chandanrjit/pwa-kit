import OcapiShopperBaskets from './ocapi-shopper-baskets'
import * as sdk from 'commerce-sdk-isomorphic'

// This class is an extension to OcapiShopperBaskets class to include basket functions implemented in SCAPI.
// Current implementation has ShopperBaskets interactiing with OCAPI which misses new functions implemented in newer SCAPI releases.
class CustomShopperBaskets extends OcapiShopperBaskets {
    constructor(config) {
        super(config)
        this.scapi = new sdk.ShopperBaskets(config)
    }

    mergeBasket(args) {
        return this.scapi.mergeBasket(args)
    }
}

export default CustomShopperBaskets
