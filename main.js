const linksSocialMedia = {
  github: 'tiagofcard',
  youtube: '/channel/UCxLc3AHW1VLUG9fYa72nqtA',
  instagram: 'tiagofetzner',
  facebook: 'tiago.f.cardoso.3',
  twitter: 'tiagof_cardoso'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userIcon.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
