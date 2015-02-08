class AuthenticationsController < ApplicationController
	def twitter
		binding.pry
		create
		
	end

	def create
		omniauth = request.env['omniauth.auth']
		provider = omniauth['provider']
		uid = omniauth['uid']
		info = omniauth['info']

		authentication = Authentication.find_by_provider_and_uid(provider, uid)
		if authentication
			user = authentication.user

			user.name = info.name
			user.image = info.image
			user.save

			session[:user_id] = user.id
			redirect_to root_path
		else
			user = User.new
			user.authentications.build(provider: provider, uid: uid)

			user.name = info.name
			user.image = info.image
			
			if user.save
				session[:user_id] = user.id
				redirect_to root_path
			else
				redirect_to root_path, errors: user.errors.full_messages
			end
		end
	end

	def logout
		session[:user_id] = nil
		redirect_to root_path
	end
end