json.array! @users do |user|#jsonで配列と変数を使えるよう変換
  json.id user.id
  json.name user.name
end