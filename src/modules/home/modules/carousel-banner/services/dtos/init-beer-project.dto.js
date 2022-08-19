/* utils */
import { replaceSpacesWithUnderscores } from '@app/utils/app.string.util'

export const DInitBeerProject = {
  params: { brewed_before: '11-2012' }
}

export function DInitBeerWithFilters (params) {
  const options = {}

  if (params?.alcoholLevelVolume) {
    options.abv_gt = params?.alcoholLevelVolume[0]
    options.abv_lt = params?.alcoholLevelVolume[1]
  }
  if (params?.ibu) {
    options.ibu_gt = params?.ibu[0]
    options.ibu_lt = params?.ibu[1]
  }
  if (params?.ebc) {
    options.ebc_gt = params?.ebc[0]
    options.ebc_lt = params?.ebc[1]
  }

  if (params?.minDate) { options.brewed_after = params?.minDate }
  if (params?.maxDate) { options.brewed_before = params?.maxDate }
  if (params?.foodPairing) { options.food_pairing = replaceSpacesWithUnderscores(params?.foodPairing || '') }
  return { params }
}
