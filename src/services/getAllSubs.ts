import axios from 'axios'
import { Sub, SubsResponseFromApi } from '../types'

export const getAllSubs = (): Promise<Sub[]> => {
	return fetchSubs().then(mapFromApiToSubs)
}

export const fetchSubs = async (): Promise<SubsResponseFromApi[]> => {
  const { data } = await axios.get<SubsResponseFromApi[]>(
    'http://localhost:3001/subs'
  )
  return data
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi[]): Sub[] => {
  /* return apiResponse.map(subFromApi => ({
		nick: subFromApi.nick,
		subMonths: subFromApi.months,
		avatar: subFromApi.profileUrl,
		description: subFromApi.description
	})) */

  return apiResponse.map((subFromApi) => {
    const {
      months: subMonths,
      profileUrl: avatar,
      nick,
      description,
    } = subFromApi

    return {
      subMonths,
      avatar,
      nick,
      description,
    }
  })
}
