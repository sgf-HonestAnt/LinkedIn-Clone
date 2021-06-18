const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MGFkYzI5MTkzMDAwMTU2MGFiOTMiLCJpYXQiOjE2MjM2NTcxODAsImV4cCI6MTYyNDg2Njc4MH0.TYp6DjYVT2X0_VJ1teUGTfeILyeVVOWVkXjn42Vqj7o"
const MY_ID = "60c70adc291930001560ab93"

// Profiles functions
export const getProfiles = async callback => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const getProfileById = async (id, callback) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const editProfile = async (payload, pictureFile = null) => {
  try {
    await fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
    if (pictureFile) {
      const imgResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: pictureFile,
      })
      console.log(imgResponse)
    }
  } catch (error) {
    console.log(error)
  }
}

// Experiences functions
export const addExperience = async payload => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export const addEditExperience = async (experienceId = "", payload, pictureFile = null) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/experiences/${experienceId}`, {
      method: experienceId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
    const data = await response.json()

    if (pictureFile) {
      const imgResponse = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/experiences/${data._id}/picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: pictureFile,
      })
      console.log(imgResponse)
    }
  } catch (error) {
    console.log(error)
  }
}

export const getExperiencesById = async (id, callback) => {
  const userId = id === "me" ? MY_ID : id
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteExperience = async experienceId => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/experiences/${experienceId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// Posts functions
export const addPost = async (textPayload, imgPayload = null) => {
  try {
    const textResponse = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(textPayload),
    })
    const data = await textResponse.json()
    console.log(data)
    if (imgPayload) {
      const imgResponse = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${data._id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
        body: imgPayload,
      })
      console.log(imgResponse)
    }
  } catch (error) {
    console.log(error)
  }
}

export const getPosts = async callback => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const getPostById = async (postId, callback) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    const data = await response.json()
    callback(data)
  } catch (error) {
    console.log(error)
  }
}

export const editPost = async (postId, payload) => {
  try {
    await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async postId => {
  try {
    await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

// File upload functions
export const uploadProfilePic = async payload => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${MY_ID}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: payload,
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
