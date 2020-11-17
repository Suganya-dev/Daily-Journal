import {entryForm } from "./JournalForm.js"
import{getEntries} from "./JournalDataProvider.js"
import {journals} from"./JournalEntryList.js"
import {MoodFilter} from"./filter/MoodFilter.js"
import{FilterBar} from "./filter/FilterBar.js"
import {getInstructors} from"./instructors/instructorprovider.js"



journals();
entryForm();
getEntries();
MoodFilter();
FilterBar();
getInstructors();
















