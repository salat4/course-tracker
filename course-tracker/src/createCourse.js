const createCourse = async (req) => {
    const { name, link, tags } = await req.json()
    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: 'POST',
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: name,
                  link: link,
                  Tags: tags,
                },
              },
            ],
          }),
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-type': 'application/json',
          },
        },
      )
      const data = await res.json()
      return { data }
    } catch (err) {
      console.log(err);
    }
  }

  module.exports = {createCourse}