def decimalToConverter(decimalNum, base):
    digits = "0123456789ABCDEF"
    outputString = ""
    while decimalNum > 0:
        reminder = decimalNum % base
        outputString = digits[reminder] + outputString
        decimalNum = decimalNum / base
    return outputString

def toDecimalConverter(num, base):
    exponent = 0
    decimalNum = 0
    num = str(num)
    for element in num[::-1]:
        if base == 16:
            element = hexTranslator(element)
        decimalNum += int(element) * (base**exponent)
        exponent += 1
    return decimalNum

def hexTranslator(ch):
    if ch == 'A':
        ch = 10
    elif ch == 'B':
        ch = 11
    elif ch == 'C':
        ch = 12
    elif ch == 'D':
        ch = 13
    elif ch == 'E':
        ch = 14
    elif ch == 'F':
        ch = 15
    return ch