REM Discord the_lobsta_man
REM https://www.unknowncheats.me/forum/members/5169418.html 
REM i hate my life this took over 2 hours just to get it to format correctly
REM ignore my spaghetti code
@echo off


for /f "tokens=2-4 delims=/ " %%a in ('echo %date%') do (
    set "yyyy=%%c"
    set "mm=%%a"
    set "dd=%%b"
)

for /f "tokens=1-3 delims=: " %%a in ('echo %time%') do (
    set "hh=%%a"
    set "min=%%b"
    set "ss=%%c"
)


set "logfile=Serieals_%yyyy%-%mm%-%dd%_%hh%-%min%-%ss%.txt"


echo Starting Print.
title Serial Checker
mode con: cols=180 lines=62
echo.
echo Serials printed

(
echo Current Date and Time: %yyyy%-%mm%-%dd% %hh%:%min%:%ss%
echo.
echo ===============================
echo      Drive Serieals
echo ===============================
wmic diskdrive get serialnumber | findstr /r /v "^$"
echo.
echo ===============================
echo      Motherboard
echo ===============================
wmic baseboard get serialnumber | findstr /r /v "^$"
echo.
echo ===============================
echo      SMBios
echo ===============================
wmic path win32_computersystemproduct get uuid | findstr /r /v "^$"
echo.
echo ===============================
echo      GPU
echo ===============================
wmic PATH Win32_VideoController GET Description,PNPDeviceID | findstr /r /v "^$"
echo.
echo ===============================
echo      RAM
echo ===============================
wmic memorychip get serialnumber | findstr /r /v "^$"
echo.
echo ===============================
echo      BIOS
echo ===============================
wmic csproduct get uuid | findstr /r /v "^$"
echo.
echo ===============================
echo      CPU
echo ===============================
wmic cpu get processorid | findstr /r /v "^$"
echo.
echo ===============================
echo      Mac Address
echo ===============================
wmic path Win32_NetworkAdapter where "PNPDeviceID like '%%PCI%%' AND AdapterTypeID='0'" get name, MacAddress | findstr /r /v "^$"
) > %logfile%

type %logfile%
pause
