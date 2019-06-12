#!/bin/bash
for i in {1..100}
do
   echo "------ Hallo_$i"
   echo "43ec7b516d3be72d38daf5767fb9c4cdca068e94--C0:Z→Z||C0:Z→Z||-C1:Z→M--Hallo$i" | openssl sha1 | awk '{print substr($0,0,2)}'
done
