class ContactsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create,:index]

    def index
        render json: Contact.all, status: :ok
    end

    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created 
    end

    private

    def contact_params
        params.permit(:first_name, :last_name, :phone, :email, :about)
    end
end
