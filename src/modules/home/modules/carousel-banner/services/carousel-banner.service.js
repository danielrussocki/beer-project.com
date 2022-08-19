import Vue from 'vue'
/* api */
import { AppBeerProjectUri } from '@app/api-gateways/app.beer-project.api-gateway'
/* dto */
import { DInitBeerProject, DInitBeerWithFilters } from './dtos/init-beer-project.dto'
/* utils */
import { arrayGroupByThree } from '@app/utils/app.array.util'

export async function initBeerProject () {
  try {
    const response = await Vue.axios.get(
      `${AppBeerProjectUri}beers`,
      DInitBeerProject
    )
    if (response.status !== 200) throw new Error('Something went wrong!')

    const data = response.data
    const dataFilter = arrayGroupByThree(data)

    return dataFilter
  } catch (e) {
    // eslint-disable-next-line
    console.error(e)
    return []
  }
}

export async function initBeerProjectWithFilters (params) {
  try {
    const response = await Vue.axios.get(
      `${AppBeerProjectUri}beers`,
      DInitBeerWithFilters(params)
    )
    if (response.status !== 200) throw new Error('Something went wrong!')

    const data = response.data
    const dataFilter = arrayGroupByThree(data)

    return dataFilter
  } catch (e) {
    // eslint-disable-next-line
    console.error(e)
    return []
  }
}
