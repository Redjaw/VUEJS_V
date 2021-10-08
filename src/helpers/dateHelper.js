import * as dayjs from 'dayjs'

export function formatDate(data) {
    return dayjs(data).format('DD/MM/YYYY hh:mm')
}
