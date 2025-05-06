from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")  # HTML 파일 로드

@app.route("/run-python", methods=["POST"])
def run_python():
    from selenium import webdriver
    from selenium.webdriver.common.action_chains import ActionChains
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.keys import Keys
    from selenium.webdriver.common.by import By
    from datetime import datetime
    from bs4 import BeautifulSoup as bs
    import pandas as pd
    import time

    options = Options()
    options.binary_location = "../code/chrome-win64/chrome.exe"     
    options.add_argument("--no-sandbox")           
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--window-size=1920,1080") 

    service = Service("../code/chromedriver.exe")
    driver = webdriver.Chrome(service=service, options = options)
    driver.get("https://www.pknu.ac.kr/main/399")
    print(driver.title)

    # 요소찾기
    menu_option = driver.find_element(By.CSS_SELECTOR, "#subCont > table > tbody > tr:nth-child(1) > td.bdlTitle > a")
    time.sleep(1)
    menu_option.click()
    time.sleep(5)
    html = driver.page_source
    driver.quit()

    soup = bs(html,'html.parser')
    contents =soup.select("#subCont > div > div.bdvTxt_wrap > div > div > div:nth-child(18) > table") #mCSB_3_cont
    # print(contents[0])
    menu = contents[0].find_all("td")
    for j in range(5):
        print(menu[j+1].text)
        print(menu[j+7].text)
        for k in range(10):
            print(menu[j+13].find_all('p')[k].text)
        print("=======================================")
    result = "Python 코드 실행 완료!"
    print(result)  # 서버 콘솔에 출력
    return result  # 클라이언트에 반환

if __name__ == "__main__":
    app.run(debug=True)
