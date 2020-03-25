string = input('enter string ')

filtered_string='' 

# filter the alphabets
for i in string:
    if i.isalpha():
        filtered_string += i

#reverse the string
reverse_string = filtered_string[::-1]

# checking palindrome
if filtered_string.upper() == reverse_string.upper():
    print("YES")
else:
    print("NO")