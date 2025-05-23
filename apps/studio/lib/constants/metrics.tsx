import { Auth, Realtime, Storage } from 'icons'
import { ActivityIcon, DatabaseIcon, HeartIcon, ServerIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type Metric = {
  key: string
  label: string
  provider?: string
  category?: MetricCategory
  id?: string
}

type MetricCategory = {
  label: string
  icon: (className?: string) => ReactNode
  key: string
}

export const METRIC_CATEGORIES = {
  API: {
    label: 'All API usage',
    icon: (className?: string) => <ActivityIcon size={16} className={className} />,
    key: 'api',
  },
  API_DATABASE: {
    label: 'Database API',
    icon: (className?: string) => <DatabaseIcon size={16} className={className} />,
    key: 'api_database',
  },
  API_AUTH: {
    label: 'Authentication',
    icon: (className?: string) => <Auth size={16} className={className} />,
    key: 'api_auth',
  },
  API_STORAGE: {
    label: 'Storage',
    icon: (className?: string) => <Storage size={16} className={className} />,
    key: 'api_storage',
  },
  API_REALTIME: {
    label: 'Realtime',
    icon: (className?: string) => <Realtime size={16} className={className} />,
    key: 'api_realtime',
  },
  INSTANCE: {
    label: 'Instance health',
    icon: (className?: string) => <HeartIcon size={16} className={className} />,
    key: 'instance',
  },
  SUPAVISOR: {
    label: 'Supavisor',
    icon: (className?: string) => <ServerIcon size={16} className={className} />,
    key: 'supavisor',
  },
}

// [Joshen] Eventually we can remove some charts here from DEPRECATED_REPORTS from Reports.constants.ts
export const METRICS: Metric[] = [
  {
    key: 'avg_cpu_usage',
    label: 'Average CPU % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'max_cpu_usage',
    label: 'Max CPU % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'disk_io_consumption',
    label: 'Disk IO % Consumed',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'disk_io_budget',
    label: 'Disk IO % Remaining',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'ram_usage',
    label: 'Memory % Usage',
    provider: 'infra-monitoring',
    category: METRIC_CATEGORIES.INSTANCE,
  },
  {
    key: 'total_realtime_egress',
    label: 'Realtime Connection Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_realtime_requests',
    label: 'Realtime Connection Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_REALTIME,
  },
  {
    key: 'total_realtime_ingress',
    label: 'Realtime Connection Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_REALTIME,
  },

  /**
   * API
   */
  {
    key: 'total_rest_ingress',
    label: 'API Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_egress',
    label: 'API Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_requests',
    label: 'API Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_get_requests',
    label: 'API GET Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_post_requests',
    label: 'API POST Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_patch_requests',
    label: 'API PATCH Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_delete_requests',
    label: 'API DELETE Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },
  {
    key: 'total_rest_options_requests',
    label: 'API OPTIONS Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_DATABASE,
  },

  /**
   * Auth
   */

  {
    key: 'total_auth_billing_period_mau',
    label: 'Auth Monthly Active User',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_billing_period_sso_mau',
    label: 'Auth Monthly Active SSO User',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_ingress',
    label: 'Auth Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_egress',
    label: 'Auth Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_requests',
    label: 'Auth Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_get_requests',
    label: 'Auth GET Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_post_requests',
    label: 'Auth POST Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_patch_requests',
    label: 'Auth PATCH Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },
  {
    key: 'total_auth_options_requests',
    label: 'Auth OPTIONS Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },

  /**
   * Storage
   */
  {
    key: 'total_storage_ingress',
    label: 'Storage Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_egress',
    label: 'Storage Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_image_render_count',
    label: 'Storage Image Transformations',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_requests',
    label: 'Storage Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_get_requests',
    label: 'Storage GET Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_post_requests',
    label: 'Storage POST Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_delete_requests',
    label: 'Storage DELETE Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_storage_options_requests',
    label: 'Storage OPTIONS Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_auth_delete_requests',
    label: 'Auth DELETE Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_AUTH,
  },

  {
    key: 'total_egress',
    label: 'All Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  {
    key: 'total_get_requests',
    label: 'All GET Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_storage_patch_requests',
    label: 'Storage PATCH Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API_STORAGE,
  },
  {
    key: 'total_requests',
    label: 'All Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_patch_requests',
    label: 'All PATCH Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_post_requests',
    label: 'All POST Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  {
    key: 'total_ingress',
    label: 'All Ingress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_delete_requests',
    label: 'All DELETE Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },
  {
    key: 'total_options_requests',
    label: 'All OPTIONS Requests',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.API,
  },

  /** Supavisor */
  {
    key: 'total_supavisor_egress_bytes',
    label: 'Shared Pooler Egress',
    provider: 'daily-stats',
    category: METRIC_CATEGORIES.SUPAVISOR,
  },
]

export const TIME_PERIODS_BILLING = [
  {
    key: 'currentBillingCycle',
    label: 'Current billing cycle',
    interval: '1d',
  },
  {
    key: 'previousBillingCycle',
    label: 'Previous billing cycle',
    interval: '1d',
  },
]

export const TIME_PERIODS_REPORTS = [
  {
    key: '7d',
    label: 'Last 7 days',
    interval: '1d',
  },
  {
    key: '30d',
    label: 'Last 30 days',
    interval: '1d',
  },
  {
    key: 'startMonth',
    label: 'This month',
    interval: '1d',
  },
]

export const TIME_PERIODS_INFRA = [
  {
    key: '10m',
    label: 'Last 10 minutes',
  },
  {
    key: '30m',
    label: 'Last 30 minutes',
  },
  {
    key: '1h',
    label: 'Last hour',
  },
  {
    key: '3h',
    label: 'Last 3 hours',
  },
  {
    key: '1d',
    label: 'Last 24 hours',
  },
  {
    key: '7d',
    label: 'Last 7 days',
  },
]
