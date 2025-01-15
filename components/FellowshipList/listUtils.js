export const sortFellowships = (fellowships, sortBy = 'createdAt') => {
  if (fellowships.length == 0) {
    return [];
  }
  return fellowships.sort((a, b) => {
    if (sortBy === 'deadline') {
      return new Date(a.fields.deadline) - new Date(b.fields.deadline)
    }
    // Default sort
    // if (sortBy === "createdAt") {
    return new Date(a.sys.createdAt) - new Date(b.sys.createdAt)
    // }
    // return a.fields.title.localeCompare(b.fields.title);
  })
}

export const filterFellowships = (
  fellowships,
  { country, type, eligibility, duration, field }
) => {
  if (fellowships.length == 0) {
    return [];
  }

  return fellowships
    .filter((fellowship) => {
      return country
        ? fellowship?.fields?.location?.toLowerCase() === country.toLowerCase()
        : true
    })
    .filter((fellowship) => {
      const arrayOfValidTypes = Object.entries(type)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidTypes.length > 0
        ? arrayOfValidTypes.includes(fellowship?.fields?.type?.toLowerCase())
        : true
    })
    .filter((fellowship) => {
      return eligibility
        ? fellowship?.fields?.eligibility?.toLowerCase() ===
            eligibility.toLowerCase()
        : true
    })
    .filter((fellowship) => {
      return duration
        ? fellowship?.fields?.duration?.toLowerCase() === duration.toLowerCase()
        : true
    })
    .filter((fellowship) => {
      const arrayOfValidFields = Object.entries(field)
        .filter(([_fieldName, fieldNameValue]) => fieldNameValue)
        .map(([fieldName]) => fieldName.toLowerCase())

      return arrayOfValidFields.length > 0
        ? arrayOfValidFields.includes(fellowship?.fields?.field?.toLowerCase())
        : true
    })
}
