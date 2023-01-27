
  const deleteCourse = async (req) => {
    const { id } = await req.json()
  
    try {
      await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          },
        },
      )
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {deleteCourse}