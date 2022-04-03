from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time, requests
import json
import numpy as np
import mysql.connector as mysql
from currency_converter import CurrencyConverter
import undetected_chromedriver as uc
driver = uc.Chrome()
driver.maximize_window()
c = CurrencyConverter()
mydb = mysql.connect(
  host="l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user="vhaithj2ezjri3a5",
  password="htf06l6xp0gsgoei",
  database = "bovesv3pjmkwzex5"
)
def convertUsd(price):
    price = c.convert(price, 'USD', 'THB')
    return price
def convertEur(price):
    price = c.convert(price, 'EUR', 'THB')
    return price
def market_8(url, gameId, marketId):
    driver.get(url)
    try:
        findPrice = driver.find_element_by_xpath('//*[@id="blockB"]/div/div/div[2]/div').text
        price = float(findPrice.replace("฿",""))
    except:
        price = float(0)
    update = "UPDATE price_check SET now_price = (%s) WHERE game_id  = (%s) AND market_id = (%s)"
    values = [price, gameId, marketId]
    cursor.execute(update,values)
    mydb.commit()
    cursor.close
def market_9(url, gameId, marketId):
    driver.get(url)
    try:
        findPrice = driver.find_element_by_xpath('//*[@id="store_form"]/div/div[1]/div/div/div[2]')
        beforePrice = float(findPrice.text.strip("$"))
    except:
        lastPrice = float(0)
        beforePrice = float(0)
    lastPrice = round(convertUsd(beforePrice),2)
    lastPrice = str(lastPrice)
    beforePrice = str(beforePrice)
    update = "UPDATE price_check SET before_price = (%s), now_price = (%s) WHERE game_id  = (%s) AND market_id = (%s)"
    values = [beforePrice,lastPrice, gameId, marketId]
    cursor.execute(update,values)
    mydb.commit()
    cursor.close
def market_10(url, gameId, marketId):
    driver.get(url)
    try:   
        findPrice = driver.find_element_by_xpath('/html/body/div[1]/div[3]/div/div[1]/div[1]/div[2]/div[2]/div[3]/div/div/div[4]/div/div[2]/div/div/span[1]/span[2]').text
        beforePrice = float(findPrice.strip("€ "))
    except:
        lastPrice = float(0)
        beforePrice = float(0)
    lastPrice = round(convertEur(beforePrice),2)
    lastPrice = str(lastPrice)
    beforePrice = str(beforePrice)
    update = "UPDATE price_check SET before_price = (%s), now_price = (%s) WHERE game_id  = (%s) AND market_id = (%s)"
    values = [beforePrice,lastPrice, gameId, marketId]
    cursor.execute(update,values)
    mydb.commit()
    cursor.close
def market_11(url, gameId, marketId):
    cursor = mydb.cursor()
    cursor.execute("SELECT steam_id FROM games_data WHERE game_id = "+str(gameId)+"")
    myresult = cursor.fetchall()
    response = requests.get(url)
    gameJson = response.json()
    price = 0
    try :
        if (gameJson[myresult[0][0]]['success'] == True) :
            gameDetail = gameJson[myresult[0][0]]['data']
            price = float(gameDetail['price_overview']['final_formatted'].replace("฿","").replace(",",""))
    except:
        print(myresult[0][0])
    finally:
        cursor = mydb.cursor()
        update = "UPDATE price_check SET now_price = %s WHERE game_id  = %s AND market_id = %s"
        values = [price,gameId,marketId]
        cursor.execute(update,values)
        mydb.commit() 
        cursor.close
def market_12(url, gameId, marketId, checkEpicgames):
    driver.get(url)
    try:
        if checkEpicgames == 0:
            driver.find_element_by_class_name('css-38hacf').click()
            checkEpicgames = True
    except:
        price = float(0)
        beforePrice = float(0)
    time.sleep(2)
    findPrice = driver.find_element_by_xpath('//*[@id="dieselReactWrapper"]/div/div[4]/main/div[2]/div/div/div/div[2]/div/div/aside/div/div/div[3]/div/div/span/div/span').text
    price =  float(findPrice.replace("THB","").replace(",",""))
    cursor = mydb.cursor()
    update = "UPDATE price_check SET now_price = %s WHERE game_id  = %s AND market_id = %s"
    values = [price, gameId, marketId]
    cursor.execute(update,values)
    mydb.commit()
    cursor.close
def market_13(url, gameId, marketId):
    driver.get(url)
    try:
        time.sleep(2)
        findPrice = driver.find_element_by_xpath('/html/body/app-root/div/div/app-product/div/div[2]/div[2]/app-product-offer-price/div/div[4]/div[1]/div/div[2]/span').text
        beforePrice = float(findPrice.strip("€ "))
        print(beforePrice)
        
    except:
        lastPrice = float(0)
        beforePrice = float(0)
    lastPrice = round(convertEur(beforePrice),2)
    lastPrice = str(lastPrice)
    beforePrice = str(beforePrice)
    cursor = mydb.cursor()
    update = "UPDATE price_check SET before_price = (%s), now_price = (%s) WHERE game_id  = (%s) AND market_id = (%s)"
    values = [beforePrice,lastPrice, gameId, marketId]
    cursor.execute(update,values)
    mydb.commit()
    cursor.close
cursor = mydb.cursor()
cursor.execute("SELECT game_id, market_id, market_url  FROM price_check")
myresult = cursor.fetchall()
checkEpicgames = 0
for i in myresult:
        print(i)
        if i[1] == 8:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_8(url, gameId, marketId)
        elif i[1] == 9:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_9(url, gameId, marketId)
        elif i[1] == 10:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_10(url, gameId, marketId)
        elif i[1] == 11:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_11(url, gameId, marketId)
        elif i[1] ==  12:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_12(url, gameId, marketId, checkEpicgames)
            checkEpicgames += 1
        elif i[1] ==  13:
            url = i[2]
            gameId = i[0]
            marketId = i[1]
            market_13(url, gameId, marketId)
mydb.commit()
