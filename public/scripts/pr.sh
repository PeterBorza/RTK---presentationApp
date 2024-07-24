NAME=echo git config user.name

MESSAGE=echo git log --oneline -1 --format=%s;

ORIGIN_BRANCH=${ORIGIN_BRANCH:=main}

TIMESTAMP=`date +%s`
PR_BRANCH=${ORIGIN_BRANCH}-PR-${TIMESTAMP}

git checkout -b ${PR_BRANCH}

git push --set-upstream origin ${PR_BRANCH}

open https://github.com/PeterBorza/RTK---presentationApp/compare/${PR_BRANCH}

git checkout main

git branch -d ${PR_BRANCH}