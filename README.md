# lolita

L changes the world.

```javascript
import L from 'lolita'

L.use('database', 'mongodb')
L.use('login_methods', ['local', 'weibo', 'twitter'])

L.config('mongodb', {
  'url': '...',
  'port': '...'
})

L.config('weibo', {
  'app_id': '...',
  'app_token': '...'
})

const Post = L.extend('Post')
const Comment = L.extend('Comment')

const me = L.User.current()

const post = new Post()
post.title = 'Sample Title'
post.user = me

post
  .save(true)
  .then(newPost => console.log(newPost))

// .loginWithEmail
// .loginWithUsername
// .login
L
  .User
  .loginWithEmail(email, password)
  .then(user => console.log(user))
  .catch(err => console.error(err))

L.User.logout()

```

## License

MIT.
