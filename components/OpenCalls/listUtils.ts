import { DateTime } from "luxon"

interface Call {
  createdAt: string
  deadline: string
  title: string
  durationUnit?: string
  durationValue?: number
  fieldList?: string
  country?: string
  type?: string
  eligibility?: string
  fees?: string
}

export interface FilterOptions {
  country?: string
  type?: { [key: string]: boolean }
  eligibility?: string
  duration?: string
  field?: { [key: string]: boolean }
  noFees?: boolean
}

export const sortCalls = (calls: Call[], sortBy: string = 'createdAt'): Call[] => {
  if (calls.length === 0) {
    return []
  }
  const response = calls.sort((a, b) => {
    if (sortBy === 'deadline') {
      const diff =
        DateTime.fromFormat(a.deadline, 'dd.LLL.yy').toMillis() -
        DateTime.fromFormat(b.deadline, 'dd.LLL.yy').toMillis()
      return diff !== 0 ? diff : a.title.localeCompare(b.title)
    }
    // Default sort
    if (sortBy === 'createdAt') {
      const diff =
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      return diff !== 0 ? diff : a.title.localeCompare(b.title)
    }
    return 0
  })

  return response
}

export const filterCalls = (
  calls: Call[],
  {
    country,
    type,
    eligibility,
    duration,
    field,
    noFees,
  }: FilterOptions
): Call[] => {
  if (calls.length === 0) {
    return []
  }

  return calls
    .filter((call) => {
      return country
        ? call?.country?.toLowerCase() === country.toLowerCase()
        : true
    })
    .filter((call) => {
      return noFees ? call.fees !== '' : true
    })
    .filter((call) => {
      const arrayOfValidTypes = Object.entries(type || {})
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())
      return arrayOfValidTypes.length > 0
        ? arrayOfValidTypes.includes(call?.type?.toLowerCase() || '')
        : true
    })
    .filter((call) => {
      return eligibility
        ? call?.eligibility?.toLowerCase() === eligibility.toLowerCase()
        : true
    })
    .filter((call) => {
      switch (duration) {
        case 'Under 1 month':
          return (
            call?.durationUnit === 'Weeks' && (call?.durationValue || 0) < 5
          )
        case 'Under 6 months':
          return (
            (call?.durationUnit === 'Weeks' && (call?.durationValue || 0) >= 5) ||
            (call?.durationUnit === 'Months' && (call?.durationValue || 0) < 6)
          )
        case '6 months+':
          return (
            call?.durationUnit === 'Months' && (call?.durationValue || 0) >= 6
          )
        default:
          return true
      }
    })
    .filter((call) => {
      const arrayOfValidFields = Object.entries(field || {})
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidFields.length > 0
        ? call?.fieldList
            ?.split(',')
            .some((item) => arrayOfValidFields.includes(item.trim().toLowerCase()))
        : true
    })
}
