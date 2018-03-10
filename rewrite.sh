#!/bin/sh
git filter-branch --env-filter "

export GIT_COMMITTER_NAME='Kaelan Mikowicz'
export GIT_COMMITTER_EMAIL='eternity01033@gmail.com'
export GIT_AUTHOR_NAME='Kaelan Mikowicz'
export GIT_AUTHOR_EMAIL='eternity01033@gmail.com'
" --tag-name-filter cat -- --branches --tags
