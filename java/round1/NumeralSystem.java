package me.mohamedahassan.oneidea.java;

public class NumeralSystem{
	public static String decimalToConverter(long decimalNum, int base){
		String outputString = "";
		while(decimalNum > 0){
			int remindar = (int) (decimalNum % base);
			if(base == 16){
				char hexChar = toHexTranslator(remindar);
				outputString = hexChar + outputString;
			}else{
				outputString = remindar + outputString;
			}
			
			decimalNum = decimalNum / base;
		}
		return outputString;
	}

	static char toHexTranslator(int num){
		char chr;
		if(num == 10)
			chr = 'A';
		else if (num == 11)
			chr = 'B';
		else if (num == 12)
			chr = 'C';
		else if (num == 13)
			chr = 'D';
		else if (num == 14)
			chr = 'E';
		else if (num == 15)
			chr = 'F';
		else
			chr = Integer.toString(num).charAt(0);
		return chr ;
	}

	public static long toDecimalConverter(String num, int base){
		int exponent = 0;
		long decimalNum = 0;
		for(int i = num.length() - 1; i >= 0; i--){
			char chr = num.charAt(i);
			int element = 0;
			if(base == 16)
				element = hexTranslator(chr);
			else
				element = Character.getNumericValue(chr);
			decimalNum += element * Math.pow(base, exponent);
			exponent += 1;
		}
		return decimalNum;
	}

	static int hexTranslator(char chr){
		int num;
		if(chr == 'A')
			num = 10;
		else if (chr == 'B')
			num = 11;
		else if (chr == 'C')
			num = 12;
		else if (chr == 'D')
			num = 13;
		else if (chr == 'E')
			num = 14;
		else if (chr == 'F')
			num = 15;
		else
			num = Character.getNumericValue(chr);
		return num;
	}
}