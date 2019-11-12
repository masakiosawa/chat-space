json.id @message.id
json.content @message.content 
json.user_name @message.user.name
json.image @message.image.url
json.date @message.created_at.strftime("%Y/%m/%d %H:%M") #時間を文字列に変換
