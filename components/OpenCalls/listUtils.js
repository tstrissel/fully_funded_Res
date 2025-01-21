export const sortCalls = (calls, sortBy = 'createdAt') => {
  if (calls.length == 0) {
    return [];
  }
  return calls.sort((a, b) => {
    if (sortBy === 'deadline') {
      return new Date(a.deadline) - new Date(b.deadline)
    }
    // Default sort
    // if (sortBy === "createdAt") {
    return new Date(a.createdAt) - new Date(b.createdAt)
    // }
    // return a.fields.title.localeCompare(b.fields.title);
  })
}

export const filterCalls = (
  calls,
  { country, type, eligibility, duration, field }
) => {
  if (calls.length == 0) {
    return [];
  }

  return calls
    .filter((call) => {
      return country
        ? call?.fields?.location?.toLowerCase() === country.toLowerCase()
        : true
    })
    .filter((call) => {
      const arrayOfValidTypes = Object.entries(type)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidTypes.length > 0
        ? arrayOfValidTypes.includes(call?.fields?.type?.toLowerCase())
        : true
    })
    .filter((call) => {
      return eligibility
        ? call?.fields?.eligibility?.toLowerCase() ===
            eligibility.toLowerCase()
        : true
    })
    .filter((call) => {
      return duration
        ? call?.fields?.duration?.toLowerCase() === duration.toLowerCase()
        : true
    })
    .filter((call) => {
      const arrayOfValidFields = Object.entries(field)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidFields.length > 0
        ? arrayOfValidFields.includes(call?.fields?.field?.toLowerCase())
        : true
    })
}
