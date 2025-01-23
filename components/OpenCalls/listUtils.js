export const sortCalls = (calls, sortBy = 'createdAt') => {
  if (calls.length == 0) {
    return [];
  }
  const response = calls.sort((a, b) => {
    if (sortBy === 'deadline') {
      return new Date(a.deadline) - new Date(b.deadline)
    }
    // Default sort
    if (sortBy === "createdAt") {
      const diff = new Date(a.createdAt) - new Date(b.createdAt);
      return (diff !== 0) ? diff : a.title.localeCompare(b.title);
    }
  })
  console.log('after sorting calls by ' + sortBy, response);
  return response;
}

export const filterCalls = (
  calls,
  { country, type, eligibility, duration, field, noFees }
) => {
  if (calls.length == 0) {
    return [];
  }
  // console.log('in filtered calls');
  // console.log('calls we have', calls);
  // console.log(country, type, eligibility, duration, field);
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
      return duration
        ? call?.duration?.toLowerCase() === duration.toLowerCase()
        : true
    })
    .filter((call) => {
      const arrayOfValidFields = Object.entries(field)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidFields.length > 0
        ? arrayOfValidFields.includes(call?.field?.toLowerCase())
        : true
    })
}
