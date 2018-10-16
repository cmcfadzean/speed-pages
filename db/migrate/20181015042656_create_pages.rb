class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :title
      t.string :url
      t.boolean :status
      t.integer :user

      t.timestamps null: false
    end
  end
end
