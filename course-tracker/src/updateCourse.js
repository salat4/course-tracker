const updateCourse = async (req) => {
  const requiest = await req.json();  
  try {
    await fetch(
                // eslint-disable-next-line no-undef
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${requiest.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
            fields:{
              Name: requiest.Name,
              link: requiest.link,
              Tags: requiest.Tags,
              purchased:true
            }
          }),
        headers: {
          // eslint-disable-next-line no-undef
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-type": "application/json"
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
  return {};
};
module.exports = { updateCourse };

// {"id": 'recoFMpK11PrjSGzx', "Name": 'asd', "Tags": :(1), "purchased": true}