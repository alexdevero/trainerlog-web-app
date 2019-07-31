// https://github.com/alexdevero/social-media-dashboard/blob/996a6e36ac522dbd878ff66a2b73a3f3d5f2052e/src/index.tsx

export const getCurrentSessionData = (sessionItemName: string) => {
  return new Promise((resolve, reject) => {
    const data = JSON.parse(window.sessionStorage.getItem(sessionItemName) as string)

    resolve(data)

    reject('No data has been restored due to an error.')
  })
}

export const setCurrentSessionData = (sessionItemName: string, sessionItemNameData: {}) => {
  return new Promise((resolve, reject) => {
    window.sessionStorage.setItem(sessionItemName, JSON.stringify(sessionItemNameData))

    resolve('Data has been successfully saved in currentSession.')

    reject('Data has not been saved due to an error.')
  })
}

export const removeCurrentSessionData = (sessionItemName: string) => {
  return new Promise((resolve, reject) => {
    window.sessionStorage.removeItem(sessionItemName)

    resolve('Data has been successfully removed from currentSession.')

    reject('Data has not been removed due to an error.')
  })
}