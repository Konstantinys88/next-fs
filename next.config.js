/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains:['img.freepik.com', 's3.amazonaws.com', 'avatars.mds.yandex.net']
	}
}

const path = require('path')
module.exports = {
	sassOptions: {
	  includePaths: [path.join(__dirname, 'styles')],
	},
  }

module.exports = nextConfig
