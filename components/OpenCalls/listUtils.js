import { DateTime } from "luxon";

export const sortCalls = (calls, sortBy = 'createdAt') => {
  if (calls.length == 0) {
    return [];
  }
  const response = calls.sort((a, b) => {
    if (sortBy === 'deadline') {
      const diff = DateTime.fromFormat(a.deadline, "dd.LLL.yy").toMillis() - DateTime.fromFormat(b.deadline, "dd.LLL.yy").toMillis()
      return (diff !== 0) ? diff : a.title.localeCompare(b.title)
    }
    // Default sort
    if (sortBy === "createdAt") {
      const diff = new Date(a.createdAt) - new Date(b.createdAt);
      return (diff !== 0) ? diff : a.title.localeCompare(b.title);
    }
  })

  return response;
}

export const filterCalls = (
  calls,
  { country, type, eligibility, duration, field, noFees }
) => {
  if (calls.length == 0) {
    return [];
  }

  return calls
    .filter((call) => {
      return country
        ? call?.country?.toLowerCase() === country.toLowerCase()
        : true
    })
    .filter((call) => {
      return noFees
        ? call.fees !== ''
        : true
    })
    .filter((call) => {
      const arrayOfValidTypes = Object.entries(type)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())
      return arrayOfValidTypes.length > 0
        ? arrayOfValidTypes.includes(call?.type?.toLowerCase())
        : true
    })
    .filter((call) => {
      return eligibility
        ? call?.eligibility?.toLowerCase() ===
            eligibility.toLowerCase()
        : true
    })
    .filter((call) => {
      switch (duration) {
        case 'Under 1 month':
          return (call?.durationUnit === 'Weeks' && call?.durationValue < 5)
        case 'Under 6 months':
          return (call?.durationUnit === 'Weeks' && call?.durationValue >= 5 || call?.durationUnit === 'Months' && call?.durationValue < 6)
        case '6 months+':
          return (call?.durationUnit === 'Months' && call?.durationValue >= 6);
        default:
          return true;
      }
    })
    .filter((call) => {
      const arrayOfValidFields = Object.entries(field)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidFields.length > 0
        ? call?.fieldList?.some(item => arrayOfValidFields.includes(item.toLowerCase()))
        : true
    })
}
