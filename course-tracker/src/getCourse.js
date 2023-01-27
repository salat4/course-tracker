const getCourses = async (req) => {
  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-type': 'application/json',
        },
      },
    )
    const courses = await res.json()
    const formattedCourses = courses.records.map(course => ({
      id: course.id,
      ...course.fields,
    }))
    return formattedCourses
  } catch (err) {
      console.log(err)
  }
}

module.exports = {getCourses}