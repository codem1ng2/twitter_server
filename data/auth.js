import exp from "constants"

let users = [
    {
        id: '1',
        username: 'apple',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    },
    {
        id: '2',
        username: 'banana',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    },
    {
        id: '3',
        username: 'orange',
        name: '오렌지',
        email: 'orange@orange.com',
        url: 'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    }
]
export async function createUser(username, password, name, email) {
    const user = {
        id: '3',
        username: username,
        name: name,
        email: email,
        url: 'https://img.freepik.com/premium-photo/young-asian-man-her-clean-face-with-fresh-healthy-skin-ai-generated_145713-6656.jpg'
    }
    users = [user, ...users]
    return user
}

export async function login(username) {
    const user = users.find((user) => user.username === username)
    return user
}