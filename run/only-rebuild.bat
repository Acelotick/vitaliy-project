@echo off
cls

cd ../
cd app

taskkill /f /im vitaliy-project.exe
cls

if exist app.exe (
    del /f /q app.exe
)

pkg -t node14-win-x64 app.js