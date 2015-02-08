class User < ActiveRecord::Base

	# a user has many posts and has many comments
	# if user is deleted, destroy all of that user's posts and comments as well
	has_many :posts, dependent: :destroy
	has_many :comments, dependent: :destroy

	# downcase email before saving it
	before_save :downcase_email

	# check there is a name and max length of 50
	validates :name, presence: true, length: {maximum: 50}

	# check there is an email, it's format, uniqueness, and max length 250
	validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, uniqueness: {case_sensitive: false}, length: {maximum: 255}

    # check password is at least 6 characters long
	validates :password, length: {minimum: 6}

	# takes care of password encryption and validation 
	# no need for those methods
	has_secure_password

	# method to downcase the email
	private
		def downcase_email
			self.email = email.downcase
		end

end
