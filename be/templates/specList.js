const specListData = `
    <option value="HB 96*100*5/8T" data-weight="16.2"></option>
    <option value="HB 100*50*5/7T" data-weight="9.3"></option>
    <option value="HB 100*100*6/8T" data-weight="17.2"></option>
    <option value="HB 125*60*6/8T" data-weight="13.2"></option>
    <option value="HB 125*125*6.5/9T" data-weight="23.8"></option>
    <option value="HB 133*140*5.5/8.5T" data-weight="24.8"></option>
    <option value="HB 148*100*6/9T" data-weight="21.1"></option>
    <option value="HB 150*75*5/7T" data-weight="14"></option>
    <option value="HB 150*150*7/10T" data-weight="31.5"></option>
    <option value="HB 152*160*6/9T" data-weight="30.4"></option>
    <option value="HB 152*180*6/9T" data-weight="30.4"></option>
    <option value="HB 158*153*6.6/9.3T" data-weight="29.8"></option>
    <option value="HB 160*82*5/8.5T" data-weight="15.8"></option>
    <option value="HB 175*90*5/8T" data-weight="18.1"></option>
    <option value="HB 175*175*7.5/11T" data-weight="40.4"></option>
    <option value="HB 190*200*6.5/10.8T" data-weight="42.5"></option>
    <option value="HB 194*150*6/9T" data-weight="30.6"></option>
    <option value="HB 198*99*4.5/7T" data-weight="18.2"></option>
    <option value="HB 200*100*5.5/8T" data-weight="21.3"></option>
    <option value="HB 200*200*8/12T" data-weight="49.9"></option>
    <option value="HB 200*204*12/12T" data-weight="56.2"></option>
    <option value="HB 206*204*7.9/12.5T" data-weight="52.1"></option>
    <option value="HB 230*240*7.5/12T" data-weight="58.5"></option>
    <option value="HB 240*120*6.2/9.8T" data-weight="30.8"></option>
    <option value="HB 244*175*7/11T" data-weight="44.1"></option>
    <option value="HB 248*124*5/8T" data-weight="25.7"></option>
    <option value="HB 250*125*6/9T" data-weight="29.6"></option>
    <option value="HB 250*250*9/14T" data-weight="72.4"></option>
    <option value="HB 250*255*14/14T" data-weight="82.2"></option>
    <option value="HB 250*260*7.5/12.5T" data-weight="68.3"></option>
    <option value="HB 270*135*6.6/10.2T" data-weight="36.7"></option>
    <option value="HB 294*200*8/12T" data-weight="56.8"></option>
    <option value="HB 294*302*12/12T" data-weight="84.5"></option>
    <option value="HB 298*149*5.5/8T" data-weight="32"></option>
    <option value="HB 300*150*6.5/9T" data-weight="36.7"></option>
    <option value="HB 300*300*10/15T" data-weight="94"></option>
    <option value="HB 300*305*15/15T" data-weight="106"></option>
    <option value="HB 340*250*9/14T" data-weight="79.7"></option>
    <option value="HB 344*348*10/16T" data-weight="115"></option>
    <option value="HB 346*174*6/9T" data-weight="41.4"></option>
    <option value="HB 350*175*7/11T" data-weight="49.6"></option>
    <option value="HB 350*350*12/19T" data-weight="137"></option>
    <option value="EA 25*25*3T" data-weight="1.12"></option>
    <option value="EA 30*30*3T" data-weight="1.36"></option>
    <option value="EA 40*40*3T" data-weight="1.83"></option>
    <option value="EA 40*40*5T" data-weight="2.95"></option>
    <option value="EA 45*45*4T" data-weight="2.74"></option>
    <option value="EA 50*50*4T" data-weight="3.06"></option>
    <option value="EA 50*50*6T" data-weight="4.43"></option>
    <option value="EA 60*60*4T" data-weight="3.68"></option>
    <option value="EA 60*60*5T" data-weight="4.55"></option>
    <option value="EA 60*60*6T" data-weight="5.37"></option>
    <option value="EA 65*65*6T" data-weight="5.91"></option>
    <option value="EA 65*65*8T" data-weight="7.66"></option>
    <option value="EA 70*70*6T" data-weight="6.38"></option>
    <option value="EA 75*75*6T" data-weight="6.85"></option>
    <option value="EA 75*75*9T" data-weight="9.96"></option>
    <option value="EA 75*75*12T" data-weight="13"></option>
    <option value="EA 80*80*6T" data-weight="7.32"></option>
    <option value="EA 80*80*7T" data-weight="8.48"></option>
    <option value="EA 90*90*6T" data-weight="8.28"></option>
    <option value="EA 90*90*7T" data-weight="9.59"></option>
    <option value="EA 90*90*10T" data-weight="13.3"></option>
    <option value="EA 90*90*13T" data-weight="17"></option>
    <option value="EA 100*100*7T" data-weight="10.7"></option>
    <option value="EA 100*100*10T" data-weight="14.9"></option>
    <option value="EA 100*100*13T" data-weight="19.1"></option>
    <option value="EA 120*120*8T" data-weight="14.7"></option>
    <option value="EA 130*130*9T" data-weight="17.9"></option>
    <option value="EA 130*130*12T" data-weight="23.4"></option>
    <option value="EA 130*130*15T" data-weight="28.8"></option>
    <option value="EA 150*150*12T" data-weight="27.3"></option>
    <option value="EA 150*150*15T" data-weight="33.6"></option>
    <option value="EA 150*150*19T" data-weight="41.9"></option>
    <option value="EA 175*175*12T" data-weight="31.8"></option>
    <option value="EA 175*175*15T" data-weight="39.4"></option>
    <option value="EA 200*200*15T" data-weight="45.3"></option>
    <option value="EA 200*200*20T" data-weight="59.7"></option>
    <option value="UA 90*75*9/9T" data-weight="11"></option>
    <option value="UA 100*75*7/7T" data-weight="9.32"></option>
    <option value="UA 100*75*10/10T" data-weight="13"></option>
    <option value="UA 110*86*6/6T" data-weight="9.8"></option>
    <option value="UA 125*75*7/7T" data-weight="10.7"></option>
    <option value="UA 125*75*10/10T" data-weight="14.9"></option>
    <option value="UA 125*75*13/13T" data-weight="19.1"></option>
    <option value="UA 125*90*10/10T" data-weight="16.1"></option>
    <option value="UA 125*90*13/13T" data-weight="20.6"></option>
    <option value="UA 150*90*9/9T" data-weight="16.4"></option>
    <option value="UA 150*90*12/12T" data-weight="21.5"></option>
    <option value="UA 150*100*9/9T" data-weight="17.1"></option>
    <option value="UA 150*100*12/12T" data-weight="22.4"></option>
    <option value="UA 150*100*15/15T" data-weight="27.7"></option>
    <option value="UA 200*90*9/14T" data-weight="23.3"></option>
    <option value="UA 200*90*10/14T" data-weight="24.7"></option>
    <option value="UA 250*90*10/15T" data-weight="29.4"></option>
    <option value="UA 250*90*12/16T" data-weight="33.7"></option>
    <option value="UA 300*90*11/16T" data-weight="36.3"></option>
    <option value="UA 300*90*13/17T" data-weight="41.3"></option>
    <option value="UA 350*100*12/17T" data-weight="45.3"></option>
    <option value="UA 400*100*13/18T" data-weight="53.8"></option>
    <option value="UA 450*125*11.5/18T" data-weight="57.4"></option>
    <option value="CH 65*42*5.5/7.5T" data-weight="7.09"></option>
    <option value="CH 75*40*5/7T" data-weight="6.92"></option>
    <option value="CH 80*45*6/8T" data-weight="9.64"></option>
    <option value="CH 100*50*5/7.5T" data-weight="9.36"></option>
    <option value="CH 100*50*6/8.5T" data-weight="9.83"></option>
    <option value="CH 100*55*4.5/7.5T" data-weight="10.6"></option>
    <option value="CH 120*55*7/9T" data-weight="13.4"></option>
    <option value="CH 125*65*6/8T" data-weight="13.4"></option>
    <option value="CH 140*60*7/10T" data-weight="14.5"></option>
    <option value="CH 140*65*5/9T" data-weight="16"></option>
    <option value="CH 150*75*6.5/10T" data-weight="18.6"></option>
    <option value="CH 150*75*9/12.5T" data-weight="24"></option>
    <option value="CH 160*65*7.5/10.5T" data-weight="18.8"></option>
    <option value="CH 160*70*5.5/9.5T" data-weight="17"></option>
    <option value="CH 180*70*8/11T" data-weight="21.4"></option>
    <option value="CH 180*75*7/10.5T" data-weight="22"></option>
    <option value="CH 200*75*8.5/11.5T" data-weight="24.6"></option>
    <option value="CH 200*80*7.5/11T" data-weight="30.3"></option>
    <option value="CH 200*90*8/13.5T" data-weight="25.3"></option>
    <option value="CH 220*80*9/12.5T" data-weight="29.4"></option>
    <option value="CH 220*85*6.5/12T" data-weight="26.6"></option>
    <option value="CH 240*85*9.5/13T" data-weight="33.2"></option>
    <option value="CH 250*90*9/13T" data-weight="34.6"></option>
    <option value="CH 250*90*11/14.5T" data-weight="40.2"></option>
    <option value="CH 260*90*10/14T" data-weight="37.9"></option>
    <option value="CH 300*90*9/13T" data-weight="38.1"></option>
    <option value="CH 300*90*10/15.5T" data-weight="43.8"></option>
    <option value="CH 300*90*12/16T" data-weight="48.6"></option>
    <option value="CH 380*100*10.5/16T" data-weight="54.5"></option>
    <option value="CH 380*100*13/16.5T" data-weight="62"></option>
    <option value="CH 380*100*13/20T" data-weight="67.3"></option>
    <option value="IB 100*75*5/8T" data-weight="12.9"></option>
    <option value="IB 125*75*5.5/9.5T" data-weight="16.1"></option>
    <option value="IB 150*75*5.5/9.5T" data-weight="17.1"></option>
    <option value="IB 150*125*8.5/14T" data-weight="36.2"></option>
    <option value="IB 180*100*6/10T" data-weight="23.6"></option>
    <option value="IB 200*100*7/10T" data-weight="26"></option>
    <option value="IB 200*150*9/16T" data-weight="50.4"></option>
    <option value="IB 250*125*7.5/12.5T" data-weight="38.3"></option>
    <option value="IB 250*125*10/19T" data-weight="55.5"></option>
    <option value="IB 300*150*8/13T" data-weight="48.3"></option>
    <option value="IB 300*150*10/18.5T" data-weight="65.5"></option>
    <option value="IB 300*150*11.5/22T" data-weight="76.8"></option>
    <option value="IB 350*150*9/15T" data-weight="58.5"></option>
    <option value="IB 350*150*12/24T" data-weight="87.2"></option>
    <option value="PI 32A-42.7 SPP_SGP-3.3T" data-weight="3.16"></option>
    <option value="PI 32A-42.7 SCH40-3.6T" data-weight="3.47"></option>
    <option value="PI 32A-42.7 SCH60-4.5T" data-weight="4.24"></option>
    <option value="PI 32A-42.7 SCH80-4.9T" data-weight="4.57"></option>
    <option value="PI 32A-42.7 SCH160-6.4T" data-weight="5.73"></option>
    <option value="PI 40A-48.6 SPP_SGP-3.3T" data-weight="3.63"></option>
    <option value="PI 40A-48.6 SCH40-3.7T" data-weight="4.1"></option>
    <option value="PI 40A-48.6 SCH60-4.5T" data-weight="4.89"></option>
    <option value="PI 40A-48.6 SCH80-5.1T" data-weight="5.47"></option>
    <option value="PI 40A-48.6 SCH160-7.1T" data-weight="7.27"></option>
    <option value="PI 50A-60.5 SPP_SGP-3.7T" data-weight="5.12"></option>
    <option value="PI 50A-60.5 SCH20-3.2T" data-weight="4.52"></option>
    <option value="PI 50A-60.5 SCH40-3.9T" data-weight="5.44"></option>
    <option value="PI 50A-60.5 SCH60-4.9T" data-weight="6.72"></option>
    <option value="PI 50A-60.5 SCH80-5.5T" data-weight="7.46"></option>
    <option value="PI 50A-60.5 SCH160-8.7T" data-weight="11.1"></option>
    <option value="PI 65A-76.3 SPP_SGP-3.7T" data-weight="6.54"></option>
    <option value="PI 65A-76.3 SCH20-4.5T" data-weight="7.97"></option>
    <option value="PI 65A-76.3 SCH40-5.2T" data-weight="9.12"></option>
    <option value="PI 65A-76.3 SCH60-6T" data-weight="10.4"></option>
    <option value="PI 65A-76.3 SCH80-7T" data-weight="12"></option>
    <option value="PI 65A-76.3 SCH160-7T" data-weight="15.6"></option>
    <option value="PI 80A-89.1 SPP_SGP-4.1T" data-weight="8.49"></option>
    <option value="PI 80A-89.1 SCH20-4.5T" data-weight="9.39"></option>
    <option value="PI 80A-89.1 SCH40-5.5T" data-weight="11.3"></option>
    <option value="PI 80A-89.1 SCH60-6.6T" data-weight="13.4"></option>
    <option value="PI 80A-89.1 SCH80-7.6T" data-weight="15.3"></option>
    <option value="PI 80A-89.1 SCH160-11.1T" data-weight="21.4"></option>
    <option value="PI 83A-88.9 SPP_SGP-4.1T" data-weight="8.49"></option>
    <option value="PI 83A-88.9 SCH40-5.49T" data-weight="11.29"></option>
    <option value="PI 83A-88.9 SCH80-7.62T" data-weight="21.35"></option>
    <option value="PI 83A-88.9 SCH80-7.62T" data-weight="21.35"></option>
    <option value="PI 90A-101.6 SPP_SGP-4.1T" data-weight="9.74"></option>
    <option value="PI 90A-101.6 SCH20-4.5T" data-weight="10.8"></option>
    <option value="PI 90A-101.6 SCH40-5.7T" data-weight="13.5"></option>
    <option value="PI 90A-101.6 SCH60-7T" data-weight="16.3"></option>
    <option value="PI 90A-101.6 SCH80-8.1T" data-weight="18.7"></option>
    <option value="PI 90A-101.6 SCH160-12.7T" data-weight="27.8"></option>
    <option value="PI 100A-114.3 SPP_SGP-4.5T" data-weight="12.2"></option>
    <option value="PI 100A-114.3 SCH20-4.9T" data-weight="13.2"></option>
    <option value="PI 100A-114.3 SCH40-6T" data-weight="16"></option>
    <option value="PI 100A-114.3 SCH60-7.1T" data-weight="18.8"></option>
    <option value="PI 100A-114.3 SCH80-8.6T" data-weight="22.4"></option>
    <option value="PI 100A-114.3 SCH120-11.1T" data-weight="28.2"></option>
    <option value="PI 100A-114.3 SCH160-11.1T" data-weight="33.6"></option>
    <option value="PI 103A-114.3 SPP_SGP-4.5T" data-weight="12.2"></option>
    <option value="PI 103A-114.3 SCH40-6T" data-weight="16"></option>
    <option value="PI 103A-114.3 SCH80-8.6T" data-weight="22.4"></option>
    <option value="PI 103A-114.3 SCH120-11.13T" data-weight="28.32"></option>
    <option value="PI 103A-114.3 SCH160-13.49T" data-weight="35.54"></option>
    <option value="PI 125A-139.8 SPP_SGP-4.9T" data-weight="16.1"></option>
    <option value="PI 125A-139.8 SCH20-5.1T" data-weight="16.9"></option>
    <option value="PI 125A-139.8 SCH40-6.6T" data-weight="21.7"></option>
    <option value="PI 125A-139.8 SCH60-8.1T" data-weight="26.3"></option>
    <option value="PI 125A-139.8 SCH80-9.5T" data-weight="30.5"></option>
    <option value="PI 125A-139.8 SCH120-12.7T" data-weight="39.8"></option>
    <option value="PI 125A-139.8 SCH160-15.9T" data-weight="48.6"></option>
    <option value="PI 150A-165.2 SPP_SGP-4.9T" data-weight="19.2"></option>
    <option value="PI 150A-165.2 SCH20-5.5T" data-weight="21.7"></option>
    <option value="PI 150A-165.2 SCH40-7.1T" data-weight="27.7"></option>
    <option value="PI 150A-165.2 SCH60-9.3T" data-weight="35.8"></option>
    <option value="PI 150A-165.2 SCH80-11T" data-weight="41.8"></option>
    <option value="PI 150A-165.2 SCH120-14.3T" data-weight="53.2"></option>
    <option value="PI 150A-165.2 SCH160-18.2T" data-weight="66.1"></option>
    <option value="PI 153A-168.3 SPP_SGP-4.9T" data-weight="19.2"></option>
    <option value="PI 153A-168.3 SCH40-7.1T" data-weight="25.2"></option>
    <option value="PI 153A-168.3 SCH80-11T" data-weight="42.7"></option>
    <option value="PI 153A-168.3 SCH120-14.27T" data-weight="54.2"></option>
    <option value="PI 153A-168.3 SCH160-18.26T" data-weight="67.56"></option>
    <option value="PI 175A-190.7 SPP_SGP-5.3T" data-weight="24.2"></option>
    <option value="PI 200A-216.3 SPP_SGP-5.9T" data-weight="30.4"></option>
    <option value="PI 200A-216.3 SCH20-6.4T" data-weight="33.1"></option>
    <option value="PI 200A-216.3 SCH30-7T" data-weight="36.1"></option>
    <option value="PI 200A-216.3 SCH40-8.2T" data-weight="42.1"></option>
    <option value="PI 200A-216.3 SCH60-10.3T" data-weight="52.3"></option>
    <option value="PI 200A-216.3 SCH80-12.7T" data-weight="63.8"></option>
    <option value="PI 200A-216.3 SCH100-15.1T" data-weight="74.9"></option>
    <option value="PI 200A-216.3 SCH120-18.2T" data-weight="88.9"></option>
    <option value="PI 200A-216.3 SCH140-20.6T" data-weight="99.4"></option>
    <option value="PI 200A-216.3 SCH160-23T" data-weight="110"></option>
    <option value="PI 203A-219.1 SPP_SGP-5.9T" data-weight="30.4"></option>
    <option value="PI 203A-219.1 SCH20-6.35T" data-weight="33.31"></option>
    <option value="PI 203A-219.1 SCH30-7.04T" data-weight="36.81"></option>
    <option value="PI 203A-219.1 SCH40-8.2T" data-weight="42.6"></option>
    <option value="PI 203A-219.1 SCH60-10.31T" data-weight="53.08"></option>
    <option value="PI 203A-219.1 SCH80-12.7T" data-weight="64.64"></option>
    <option value="PI 203A-219.1 SCH100-15.1T" data-weight="75.92"></option>
    <option value="PI 203A-219.1 SCH120-18.26T" data-weight="90.44"></option>
    <option value="PI 203A-219.1 SCH140-20.62T" data-weight="100.92"></option>
    <option value="PI 203A-219.1 SCH160-23.01T" data-weight="111.27"></option>
    <option value="PI 225A-241.8 SPP_SGP-6.2T" data-weight="36"></option>
    <option value="PI 250A-267.4 SPP_SGP-6.4T" data-weight="41.2"></option>
    <option value="PI 250A-267.4 SCH20-6.4T" data-weight="41.2"></option>
    <option value="PI 250A-267.4 SCH30-7.8T" data-weight="49.9"></option>
    <option value="PI 250A-267.4 SCH40-9.3T" data-weight="59.2"></option>
    <option value="PI 250A-267.4 SCH60-12.7T" data-weight="79.8"></option>
    <option value="PI 250A-267.4 SCH80-15.1T" data-weight="93.9"></option>
    <option value="PI 250A-267.4 SCH100-18.2T" data-weight="112"></option>
    <option value="PI 250A-267.4 SCH120-21.4T" data-weight="130"></option>
    <option value="PI 250A-267.4 SCH140-25.4T" data-weight="152"></option>
    <option value="PI 250A-267.4 SCH160-28.6T" data-weight="169"></option>
    <option value="PI 253A-273.1 SPP_SGP-6.4T" data-weight="41.2"></option>
    <option value="PI 253A-273.1 SCH20-6.35T" data-weight="41.77"></option>
    <option value="PI 253A-273.1 SCH30-7.8T" data-weight="51.03"></option>
    <option value="PI 253A-273.1 SCH40-9.27T" data-weight="60.31"></option>
    <option value="PI 253A-273.1 SCH60-12.7T" data-weight="81.5"></option>
    <option value="PI 253A-273.1 SCH80-15.9T" data-weight="100.8"></option>
    <option value="PI 253A-273.1 SCH100-18.26T" data-weight="114.75"></option>
    <option value="PI 253A-273.1 SCH120-21.44T" data-weight="133.06"></option>
    <option value="PI 253A-273.1 SCH140-25.4T" data-weight="155.15"></option>
    <option value="PI 253A-273.1 SCH160-28.58T" data-weight="172.33"></option>
    <option value="PI 300A-318.5 SPP_SGP-7T" data-weight="53.8"></option>
    <option value="PI 300A-318.5 SCH20-6.4T" data-weight="49.3"></option>
    <option value="PI 300A-318.5 SCH30-8.4T" data-weight="64.2"></option>
    <option value="PI 300A-318.5 SCH40-10.3T" data-weight="78.3"></option>
    <option value="PI 300A-318.5 SCH60-14.3T" data-weight="107"></option>
    <option value="PI 300A-318.5 SCH80-17.4T" data-weight="129"></option>
    <option value="PI 300A-318.5 SCH100-21.4T" data-weight="157"></option>
    <option value="PI 300A-318.5 SCH120-25.4T" data-weight="184"></option>
    <option value="PI 300A-318.5 SCH140-28.6T" data-weight="204"></option>
    <option value="PI 300A-318.5 SCH160-33.3T" data-weight="235"></option>
    <option value="SP 30*30*1.2T" data-weight="1.06"></option>
    <option value="SP 30*30*1.6T" data-weight="1.38"></option>
    <option value="SP 30*30*2.5T" data-weight="2.1"></option>
    <option value="SP 30*30*3T" data-weight="2.5"></option>
    <option value="SP 40*20*1.2T" data-weight="1.05"></option>
    <option value="SP 40*20*1.6T" data-weight="1.38"></option>
    <option value="SP 40*40*1.6T" data-weight="1.88"></option>
    <option value="SP 40*40*2.3T" data-weight="2.62"></option>
    <option value="SP 40*40*2.5T" data-weight="2.9"></option>
    <option value="SP 40*40*3T" data-weight="3.4"></option>
    <option value="SP 40*40*3.6T" data-weight="4"></option>
    <option value="SP 40*40*4T" data-weight="4.4"></option>
    <option value="SP 40*40*5T" data-weight="5.3"></option>
    <option value="SP 50*20*1.6T" data-weight="1.63"></option>
    <option value="SP 50*20*2.3T" data-weight="2.25"></option>
    <option value="SP 50*30*1.6T" data-weight="1.88"></option>
    <option value="SP 50*30*2.3T" data-weight="2.62"></option>
    <option value="SP 50*30*3.2T" data-weight="3.49"></option>
    <option value="SP 50*50*1.6T" data-weight="2.38"></option>
    <option value="SP 50*50*2.3T" data-weight="3.34"></option>
    <option value="SP 50*50*2.5T" data-weight="3.7"></option>
    <option value="SP 50*50*3T" data-weight="4.4"></option>
    <option value="SP 50*50*3.2T" data-weight="4.5"></option>
    <option value="SP 50*50*3.6T" data-weight="5.1"></option>
    <option value="SP 50*50*4T" data-weight="5.6"></option>
    <option value="SP 50*50*5T" data-weight="6.9"></option>
    <option value="SP 50*50*6T" data-weight="8"></option>
    <option value="SP 50*50*6.3T" data-weight="8.3"></option>
    <option value="SP 60*30*1.6T" data-weight="2.13"></option>
    <option value="SP 60*30*2.3T" data-weight="2.98"></option>
    <option value="SP 60*30*3.2T" data-weight="3.99"></option>
    <option value="SP 60*40*1.6T" data-weight="2.38"></option>
    <option value="SP 60*40*2.3T" data-weight="3.34"></option>
    <option value="SP 60*40*3.2T" data-weight="4.5"></option>
    <option value="SP 60*60*1.6T" data-weight="2.88"></option>
    <option value="SP 60*60*2.3T" data-weight="4.06"></option>
    <option value="SP 60*60*2.5T" data-weight="4.5"></option>
    <option value="SP 60*60*3T" data-weight="5.3"></option>
    <option value="SP 60*60*3.2T" data-weight="5.5"></option>
    <option value="SP 60*60*3.6T" data-weight="6.3"></option>
    <option value="SP 60*60*4T" data-weight="6.9"></option>
    <option value="SP 60*60*5T" data-weight="8.4"></option>
    <option value="SP 60*60*6T" data-weight="9.9"></option>
    <option value="SP 60*60*6.3T" data-weight="10.3"></option>
    <option value="SP 60*60*8T" data-weight="12.5"></option>
    <option value="SP 70*70*3T" data-weight="6.2"></option>
    <option value="SP 70*70*3.2T" data-weight="6.6"></option>
    <option value="SP 70*70*3.6T" data-weight="7.4"></option>
    <option value="SP 70*70*4T" data-weight="8.2"></option>
    <option value="SP 70*70*5T" data-weight="10"></option>
    <option value="SP 70*70*6T" data-weight="11.8"></option>
    <option value="SP 70*70*6.3T" data-weight="12.3"></option>
    <option value="SP 70*70*8T" data-weight="15"></option>
    <option value="SP 75*20*1.6T" data-weight="2.25"></option>
    <option value="SP 75*20*2.3T" data-weight="3.16"></option>
    <option value="SP 75*45*1.6T" data-weight="2.88"></option>
    <option value="SP 75*45*2.3T" data-weight="4.06"></option>
    <option value="SP 75*45*3.2T" data-weight="5.5"></option>
    <option value="SP 75*50*1.6T" data-weight="3.01"></option>
    <option value="SP 75*50*2.3T" data-weight="4.24"></option>
    <option value="SP 75*50*3.2T" data-weight="5.75"></option>
    <option value="SP 75*75*1.6T" data-weight="3.64"></option>
    <option value="SP 75*75*2.3T" data-weight="5.14"></option>
    <option value="SP 75*75*3.2T" data-weight="7.01"></option>
    <option value="SP 75*75*4.5T" data-weight="9.55"></option>
    <option value="SP 80*80*2.3T" data-weight="5.5"></option>
    <option value="SP 80*80*3T" data-weight="7.2"></option>
    <option value="SP 80*80*3.2T" data-weight="7.51"></option>
    <option value="SP 80*80*3.6T" data-weight="8.5"></option>
    <option value="SP 80*80*4T" data-weight="9.4"></option>
    <option value="SP 80*80*4.5T" data-weight="10.3"></option>
    <option value="SP 80*80*5T" data-weight="11.6"></option>
    <option value="SP 80*80*6T" data-weight="13.6"></option>
    <option value="SP 80*80*6.3T" data-weight="14.2"></option>
    <option value="SP 80*80*8T" data-weight="15"></option>
    <option value="SP 90*90*2.3T" data-weight="6.23"></option>
    <option value="SP 90*90*3.2T" data-weight="8.51"></option>
    <option value="SP 90*90*5T" data-weight="13.1"></option>
    <option value="SP 90*90*6T" data-weight="15.5"></option>
    <option value="SP 90*90*6.3T" data-weight="16.2"></option>
    <option value="SP 90*90*8T" data-weight="20.1"></option>
    <option value="SP 100*50*1.6T" data-weight="3.64"></option>
    <option value="SP 100*50*2.3T" data-weight="5.14"></option>
    <option value="SP 100*50*3.2T" data-weight="7.01"></option>
    <option value="SP 100*50*4.5T" data-weight="9.55"></option>
    <option value="SP 100*60*3T" data-weight="7.2"></option>
    <option value="SP 100*60*3.2T" data-weight="7.6"></option>
    <option value="SP 100*60*3.6T" data-weight="8.5"></option>
    <option value="SP 100*60*4T" data-weight="9.4"></option>
    <option value="SP 100*60*5T" data-weight="11.6"></option>
    <option value="SP 100*60*6T" data-weight="13.6"></option>
    <option value="SP 100*60*6.3T" data-weight="14.2"></option>
    <option value="SP 100*60*8T" data-weight="17.5"></option>
    <option value="SP 100*100*2.3T" data-weight="6.95"></option>
    <option value="SP 100*100*3.2T" data-weight="9.52"></option>
    <option value="SP 100*100*3.6T" data-weight="10.8"></option>
    <option value="SP 100*100*4T" data-weight="11.7"></option>
    <option value="SP 100*100*4.5T" data-weight="13.1"></option>
    <option value="SP 100*100*6T" data-weight="17"></option>
    <option value="SP 100*100*6.3T" data-weight="18.2"></option>
    <option value="SP 100*100*8T" data-weight="22.6"></option>
    <option value="SP 100*100*9T" data-weight="24.1"></option>
    <option value="SP 100*100*10T" data-weight="27.4"></option>
    <option value="SP 100*100*12T" data-weight="30.2"></option>
    <option value="SP 120*60*3.6T" data-weight="9.7"></option>
    <option value="SP 120*60*4T" data-weight="10.7"></option>
    <option value="SP 120*60*5T" data-weight="13.1"></option>
    <option value="SP 120*60*6T" data-weight="15.5"></option>
    <option value="SP 120*60*6.3T" data-weight="16.2"></option>
    <option value="SP 120*60*8T" data-weight="20.1"></option>
    <option value="SP 120*60*10T" data-weight="24.6"></option>
    <option value="SP 120*80*3.6T" data-weight="10.8"></option>
    <option value="SP 120*80*4T" data-weight="11.9"></option>
    <option value="SP 120*80*5T" data-weight="14.7"></option>
    <option value="SP 120*80*6T" data-weight="17.4"></option>
    <option value="SP 120*80*6.3T" data-weight="18.2"></option>
    <option value="SP 120*80*8T" data-weight="22.6"></option>
    <option value="SP 120*80*10T" data-weight="27.4"></option>
    <option value="SP 120*120*4T" data-weight="14.4"></option>
    <option value="SP 120*120*5T" data-weight="17.8"></option>
    <option value="SP 120*120*6T" data-weight="21.2"></option>
    <option value="SP 120*120*6.3T" data-weight="22.2"></option>
    <option value="SP 120*120*8T" data-weight="27.6"></option>
    <option value="SP 120*120*10T" data-weight="33.7"></option>
    <option value="SP 120*120*12T" data-weight="39.5"></option>
    <option value="SP 120*120*12.5T" data-weight="40.9"></option>
    <option value="SP 125*75*2.3T" data-weight="6.95"></option>
    <option value="SP 125*75*3.2T" data-weight="9.52"></option>
    <option value="SP 125*75*4T" data-weight="11.7"></option>
    <option value="SP 125*75*4.5T" data-weight="13.1"></option>
    <option value="SP 125*75*6T" data-weight="17"></option>
    <option value="SP 125*125*3.2T" data-weight="12"></option>
    <option value="SP 125*125*4.5T" data-weight="16.6"></option>
    <option value="SP 125*125*5T" data-weight="18.3"></option>
    <option value="SP 125*125*6T" data-weight="21.7"></option>
    <option value="SP 125*125*9T" data-weight="31.1"></option>
    <option value="SP 125*125*12T" data-weight="39.7"></option>
    <option value="SP 140*80*4T" data-weight="13.2"></option>
    <option value="SP 140*80*5T" data-weight="16.3"></option>
    <option value="SP 140*80*6T" data-weight="19.3"></option>
    <option value="SP 140*80*6.3T" data-weight="20.2"></option>
    <option value="SP 140*80*8T" data-weight="25.1"></option>
    <option value="SP 140*80*10T" data-weight="30.6"></option>
    <option value="SP 140*140*5T" data-weight="21"></option>
    <option value="SP 140*140*6T" data-weight="24.9"></option>
    <option value="SP 140*140*6.3T" data-weight="26.1"></option>
    <option value="SP 140*140*8T" data-weight="32.6"></option>
    <option value="SP 140*140*10T" data-weight="40"></option>
    <option value="SP 140*140*12T" data-weight="47"></option>
    <option value="SP 140*140*12.5T" data-weight="48.7"></option>
    <option value="SP 150*100*3.2T" data-weight="12"></option>
    <option value="SP 150*100*4T" data-weight="15.1"></option>
    <option value="SP 150*100*4.5T" data-weight="16.6"></option>
    <option value="SP 150*100*5T" data-weight="18.6"></option>
    <option value="SP 150*100*6T" data-weight="21.7"></option>
    <option value="SP 150*100*6.3T" data-weight="23.1"></option>
    <option value="SP 150*100*8T" data-weight="28.9"></option>
    <option value="SP 150*100*9T" data-weight="31.1"></option>
    <option value="SP 150*100*10T" data-weight="35.3"></option>
    <option value="SP 150*100*12T" data-weight="41.4"></option>
    <option value="SP 150*100*12.5T" data-weight="42.8"></option>
    <option value="SP 150*150*4.5T" data-weight="20.1"></option>
    <option value="SP 150*150*5T" data-weight="22.3"></option>
    <option value="SP 150*150*6T" data-weight="26.4"></option>
    <option value="SP 150*150*8T" data-weight="35.1"></option>
    <option value="SP 150*150*9T" data-weight="38.2"></option>
    <option value="SP 150*150*10T" data-weight="43.1"></option>
    <option value="SP 150*150*12T" data-weight="50.8"></option>
    <option value="SP 150*150*12.5T" data-weight="52.7"></option>
    <option value="SP 150*150*16T" data-weight="65.2"></option>
    <option value="SP 160*80*4T" data-weight="14.4"></option>
    <option value="SP 160*80*5T" data-weight="17.8"></option>
    <option value="SP 160*80*6T" data-weight="21.2"></option>
    <option value="SP 160*80*6.3T" data-weight="22.2"></option>
    <option value="SP 160*80*8T" data-weight="27.6"></option>
    <option value="SP 160*80*10T" data-weight="33.7"></option>
    <option value="SP 160*80*12T" data-weight="39.5"></option>
    <option value="SP 160*80*12.5T" data-weight="40.9"></option>
    <option value="SP 160*160*5T" data-weight="24.1"></option>
    <option value="SP 160*160*6T" data-weight="28.7"></option>
    <option value="SP 160*160*6.3T" data-weight="30.1"></option>
    <option value="SP 160*160*8T" data-weight="37.6"></option>
    <option value="SP 160*160*10T" data-weight="46.3"></option>
    <option value="SP 160*160*12T" data-weight="54.6"></option>
    <option value="SP 160*160*12.5T" data-weight="56.6"></option>
    <option value="SP 160*160*16T" data-weight="70.2"></option>
    <option value="SP 175*175*4.5T" data-weight="23.7"></option>
    <option value="SP 175*175*5T" data-weight="26.2"></option>
    <option value="SP 175*175*6T" data-weight="31.1"></option>
    <option value="SP 180*100*4T" data-weight="16.9"></option>
    <option value="SP 180*100*5T" data-weight="21"></option>
    <option value="SP 180*100*6T" data-weight="24.9"></option>
    <option value="SP 180*100*6.3T" data-weight="26.1"></option>
    <option value="SP 180*100*8T" data-weight="32.6"></option>
    <option value="SP 180*100*10T" data-weight="40"></option>
    <option value="SP 180*100*12T" data-weight="47"></option>
    <option value="SP 180*100*12.5T" data-weight="48.7"></option>
    <option value="SP 180*180*5T" data-weight="27.3"></option>
    <option value="SP 180*180*6T" data-weight="32.5"></option>
    <option value="SP 180*180*6.3T" data-weight="34"></option>
    <option value="SP 180*180*8T" data-weight="42.7"></option>
    <option value="SP 180*180*10T" data-weight="52.5"></option>
    <option value="SP 180*180*12T" data-weight="62.1"></option>
    <option value="SP 180*180*12.5T" data-weight="64.4"></option>
    <option value="SP 180*180*16T" data-weight="80.2"></option>
    <option value="SP 200*100*4T" data-weight="18.1"></option>
    <option value="SP 200*100*4.5T" data-weight="12"></option>
    <option value="SP 200*100*5T" data-weight="22.6"></option>
    <option value="SP 200*100*6T" data-weight="26.4"></option>
    <option value="SP 200*100*6.3T" data-weight="28.1"></option>
    <option value="SP 200*100*8T" data-weight="35.1"></option>
    <option value="SP 200*100*9T" data-weight="38.2"></option>
    <option value="SP 200*100*10T" data-weight="43.1"></option>
    <option value="SP 200*100*12T" data-weight="50.8"></option>
    <option value="SP 200*100*12.5T" data-weight="52.7"></option>
    <option value="SP 200*100*16T" data-weight="65.2"></option>
    <option value="SP 200*120*6T" data-weight="28.7"></option>
    <option value="SP 200*120*6.3T" data-weight="29.9"></option>
    <option value="SP 200*120*8T" data-weight="37.3"></option>
    <option value="SP 200*120*10T" data-weight="45.9"></option>
    <option value="SP 200*120*12T" data-weight="54.5"></option>
    <option value="SP 200*120*12.5T" data-weight="55.7"></option>
    <option value="SP 200*150*4.5T" data-weight="23.7"></option>
    <option value="SP 200*150*6T" data-weight="31.1"></option>
    <option value="SP 200*150*9T" data-weight="45.3"></option>
    <option value="SP 200*200*4.5T" data-weight="27.2"></option>
    <option value="SP 200*200*5T" data-weight="35.8"></option>
    <option value="SP 200*200*6T" data-weight="46.9"></option>
    <option value="SP 200*200*6.3T" data-weight="38"></option>
    <option value="SP 200*200*8T" data-weight="47.7"></option>
    <option value="SP 200*200*9T" data-weight="52.3"></option>
    <option value="SP 200*200*10T" data-weight="58.8"></option>
    <option value="SP 200*200*12T" data-weight="67.9"></option>
    <option value="SP 200*200*12.5T" data-weight="72.3"></option>
    <option value="SP 200*200*16T" data-weight="90.3"></option>
    <option value="SP 250*150*5T" data-weight="30.4"></option>
    <option value="SP 250*150*6T" data-weight="35.8"></option>
    <option value="SP 250*150*6.3T" data-weight="38"></option>
    <option value="SP 250*150*8T" data-weight="47.7"></option>
    <option value="SP 250*150*9T" data-weight="52.3"></option>
    <option value="SP 250*150*10T" data-weight="58.8"></option>
    <option value="SP 250*150*12T" data-weight="67.9"></option>
    <option value="SP 250*150*12.5T" data-weight="72.3"></option>
    <option value="SP 250*150*16T" data-weight="90.3"></option>
    <option value="SP 250*250*5T" data-weight="38"></option>
    <option value="SP 250*250*6T" data-weight="45.2"></option>
    <option value="SP 250*250*6.3T" data-weight="47.9"></option>
    <option value="SP 250*250*8T" data-weight="59.5"></option>
    <option value="SP 250*250*9T" data-weight="66.5"></option>
    <option value="SP 250*250*10T" data-weight="74.5"></option>
    <option value="SP 250*250*12T" data-weight="86.8"></option>
    <option value="SP 250*250*12.5T" data-weight="91.9"></option>
    <option value="SP 250*250*16T" data-weight="115"></option>

`;